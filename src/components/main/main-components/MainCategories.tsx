import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface MainCategoriesProps {
  categories: string[];
  tags: string[];
  selectedCategories: string[];
  selectedTags: string[];
  toggleCategory: (category: string) => void;
  toggleTag: (tag: string) => void;
  clearFilters: () => void;
}

export const MainCategories = ({
  categories,
  tags,
  selectedCategories,
  selectedTags,
  toggleCategory,
  toggleTag,
  clearFilters,
}: MainCategoriesProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <SlidersHorizontal className="h-4 w-4" />
          <span className="sr-only">Filter</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filter Posts</SheetTitle>
          <SheetDescription>
            Narrow down posts by category and tags
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => toggleCategory(category)}
                  />
                  <Label htmlFor={`category-${category}`}>{category}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Tags</h3>
            <div className="grid grid-cols-2 gap-2">
              {tags.map((tag) => (
                <div key={tag} className="flex items-center space-x-2">
                  <Checkbox
                    id={`tag-${tag}`}
                    checked={selectedTags.includes(tag)}
                    onCheckedChange={() => toggleTag(tag)}
                  />
                  <Label htmlFor={`tag-${tag}`}>{tag}</Label>
                </div>
              ))}
            </div>
          </div>

          <Button variant="outline" className="w-full" onClick={clearFilters}>
            Clear All Filters
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
