import { Button } from "@/components/ui/button";
import { useTheme } from "@/context";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="icon"
      className="fixed top-4 right-4 z-50 shadow-lg border-2 text-gray-900"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </Button>
  );
};
