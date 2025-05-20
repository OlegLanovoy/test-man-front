"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { BookmarkIcon, Heart, MessageCircle, Share2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  readTime: string;
  likes: number;
  comments: number;
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

  const timeAgo = formatDistanceToNow(new Date(post.date), { addSuffix: true });

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
          src={post.coverImage || "/placeholder.svg"}
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
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
              />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{post.author.name}</span>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className={cn("h-8 w-8", liked && "text-red-500")}
              onClick={() => setLiked(!liked)}
            >
              <Heart
                className="h-4 w-4"
                fill={liked ? "currentColor" : "none"}
              />
              <span className="sr-only">Like</span>
            </Button>
            <span className="text-xs text-muted-foreground">
              {liked ? post.likes + 1 : post.likes}
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
