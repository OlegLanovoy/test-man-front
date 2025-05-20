import { cn } from "@/lib/utils";
import { type Post } from "./main-components/MainPostCard";
import { MainSearch } from "./main-components/MainSearch";
import { MainSelect } from "./main-components/MainSelect";
import { MainPaggination } from "./main-components/MainPagination";
import { MainCategories } from "./main-components/MainCategories";
import { MainPosts } from "./main-components/MainPosts";
import { useMemo, useState } from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

interface PostsWrapperProps {
  initialPosts: Post[];
  className?: string;
}

type SortOption = "latest" | "oldest" | "popular" | "comments";

export function PostsWrapper({ initialPosts, className }: PostsWrapperProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("latest");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;

  const categories = useMemo(
    () => Array.from(new Set(initialPosts.map((post) => post.category))),
    [initialPosts]
  );

  const tags = useMemo(
    () => Array.from(new Set(initialPosts.flatMap((post) => post.tags))),
    [initialPosts]
  );

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSortBy("latest");
    setSelectedCategories([]);
    setSelectedTags([]);
    setCurrentPage(1);
  };

  const filteredPosts = useMemo(() => {
    let result = [...initialPosts];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(q) ||
          post.excerpt.toLowerCase().includes(q)
      );
    }

    if (selectedCategories.length > 0) {
      result = result.filter((post) =>
        selectedCategories.includes(post.category)
      );
    }

    if (selectedTags.length > 0) {
      result = result.filter((post) =>
        post.tags.some((tag) => selectedTags.includes(tag))
      );
    }

    switch (sortBy) {
      case "latest":
        result.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;
      case "oldest":
        result.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        break;
      case "popular":
        result.sort((a, b) => b.likes - a.likes);
        break;
      case "comments":
        result.sort((a, b) => b.comments - a.comments);
        break;
    }

    return result;
  }, [initialPosts, searchQuery, selectedCategories, selectedTags, sortBy]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const navigate = useNavigate();

  const logOut = () => {
    console.log(Cookies.remove("token"));
    navigate("/auth");
  };

  return (
    <div className={cn("space-y-8", className)}>
      <Button variant="outline" className="mt-4 mr-5" onClick={logOut}>
        Log Out
      </Button>
      <Button
        variant="outline"
        className="mt-4"
        onClick={() => navigate("/profile")}
      >
        Profile
      </Button>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <MainSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <Button
          variant="outline"
          className="mt-4"
          onClick={() => navigate("/create-post")}
        >
          Create Post
        </Button>

        <div className="flex items-center gap-2">
          <MainSelect value={sortBy} onChange={setSortBy} />
          <MainCategories
            categories={categories}
            tags={tags}
            selectedCategories={selectedCategories}
            toggleCategory={toggleCategory}
            selectedTags={selectedTags}
            toggleTag={toggleTag}
            clearFilters={clearFilters}
          />
        </div>
      </div>

      <MainPosts
        posts={currentPosts}
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        loading={false}
        onClearFilters={clearFilters}
      />

      <MainPaggination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
