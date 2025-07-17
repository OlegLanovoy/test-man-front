"use client";

import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { BookmarkIcon, Heart, MessageCircle, Share2 } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { likePost, unlikePost } from "@/requests/LikesRequest";

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: number;
  tags: string[];
  readTime: string;
  createdAt: string;
  likes?: number;
  comments?: number;
  user: { firstName: string; lastName: string; age: number };
}

interface PostCardProps {
  post: Post;
  variant?: "default" | "featured";
  className?: string;
}

export function PostCard({
  post,
  variant = "default",
  className,
}: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const timeAgo = useMemo(() => {
    if (!post.createdAt || isNaN(Date.parse(post.createdAt))) {
      console.warn("Invalid createdAt format:", post.createdAt);
      return "Unknown time";
    }

    return formatDistanceToNow(new Date(post.createdAt), { addSuffix: true });
  }, [post.createdAt]);

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-200 hover:shadow-md",
        variant === "featured" && "md:flex md:h-[320px]",
        className
      )}
    >
      <div
        className={cn(
          "relative h-48 w-full overflow-hidden",
          variant === "featured" && "md:h-full md:w-1/2"
        )}
      >
        <img
          src={"/placeholder.svg"}
          alt={post.title}
          className="object-cover transition-transform duration-500 hover:scale-105"
        />

        <Badge className="absolute left-3 top-3 z-10">{post.category}</Badge>
      </div>
      <div
        className={cn("flex flex-col", variant === "featured" && "md:w-1/2")}
      >
        <CardHeader>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{timeAgo}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <Link to={`/posts/${post.id}`} className="group">
            <h3 className="line-clamp-2 text-xl font-bold tracking-tight transition-colors group-hover:text-primary">
              {post.title}
            </h3>
          </Link>
          <CardDescription className="line-clamp-2">
            {post.excerpt}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="bg-muted/50">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t p-4">
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium">
              {post.user.firstName} {post.user.lastName}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className={cn("h-8 w-8", liked && "text-red-500")}
              onClick={async () => {
                try {
                  if (liked) {
                    await unlikePost(Number(post.id));
                  } else {
                    await likePost(Number(post.id));
                  }
                  setLiked(!liked);
                } catch (error) {
                  console.error("Error updating like:", error);
                }
              }}
            >
              <Heart
                className="h-4 w-4"
                fill={liked ? "currentColor" : "none"}
              />
              <span className="sr-only">Like</span>
            </Button>
            <span className="text-xs text-muted-foreground">
              {liked ? (post.likes ?? 0) + 1 : post.likes}
            </span>

            <Button variant="ghost" size="icon" className="h-8 w-8 ml-2">
              <MessageCircle className="h-4 w-4" />
              <span className="sr-only">Comments</span>
            </Button>
            <span className="text-xs text-muted-foreground">
              {post.comments}
            </span>

            <Button variant="ghost" size="icon" className="h-8 w-8 ml-2">
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={cn("h-8 w-8 ml-2", bookmarked && "text-primary")}
              onClick={() => setBookmarked(!bookmarked)}
            >
              <BookmarkIcon
                className="h-4 w-4"
                fill={bookmarked ? "currentColor" : "none"}
              />
              <span className="sr-only">Bookmark</span>
            </Button>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
