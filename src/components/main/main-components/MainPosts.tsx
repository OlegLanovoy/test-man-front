import { PostCard, type Post } from "./MainPostCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

interface MainPostsProps {
  posts: Post[];
  currentPage: number;
  postsPerPage: number;
  loading: boolean;
  onClearFilters: () => void;
}

export const MainPosts = ({
  posts,
  currentPage,
  postsPerPage,
  loading,
  onClearFilters,
}: MainPostsProps) => {
  const displayPosts = posts.slice(
    currentPage === 1 ? 1 : 0,
    currentPage === 1 ? postsPerPage : postsPerPage
  );

  return (
    <>
      {loading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array(postsPerPage)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="h-48 w-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
                <div className="flex justify-between">
                  <Skeleton className="h-8 w-24" />
                  <Skeleton className="h-8 w-32" />
                </div>
              </div>
            ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <h3 className="text-xl font-semibold">No posts found</h3>
          <p className="text-muted-foreground mt-2">
            Try adjusting your search or filter criteria
          </p>
          <Button variant="outline" className="mt-4" onClick={onClearFilters}>
            Clear All Filters
          </Button>
        </div>
      ) : (
        <>
          {currentPage === 1 && posts.length > 0 && (
            <PostCard post={posts[0]} variant="featured" className="mb-8" />
          )}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </>
      )}
    </>
  );
};
