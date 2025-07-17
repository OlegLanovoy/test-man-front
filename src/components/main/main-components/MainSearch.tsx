import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface MainSearchProps {
  searchQuery: string;
  setSearchQuery: (srt: string) => void;
}

export const MainSearch = ({
  searchQuery,
  setSearchQuery,
}: MainSearchProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search posts..."
        className="pl-8 w-full sm:w-[300px]"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};
