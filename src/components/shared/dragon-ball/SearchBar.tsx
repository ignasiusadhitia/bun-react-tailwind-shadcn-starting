import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const SearchBar: React.FC<{
  searchTerm: string;
  onSearchChange: (term: string) => void;
}> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative max-w-md mx-auto mb-8">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-muted-foreground" />
      </div>
      <Input
        type="text"
        placeholder="Search Dragon Ball characters..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10 h-12 text-base"
      />
    </div>
  );
};
