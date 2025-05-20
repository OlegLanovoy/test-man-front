import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";

type SortOption = "latest" | "oldest" | "popular" | "comments";

interface MainSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export const MainSelect = ({ value, onChange }: MainSelectProps) => {
  return (
    <Select value={value} onValueChange={(val) => onChange(val as SortOption)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="latest">Latest</SelectItem>
        <SelectItem value="oldest">Oldest</SelectItem>
        <SelectItem value="popular">Most Popular</SelectItem>
        <SelectItem value="comments">Most Comments</SelectItem>
      </SelectContent>
    </Select>
  );
};
