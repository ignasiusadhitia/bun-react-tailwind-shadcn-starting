import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Suspense, useEffect, useMemo, useState } from "react";

import "@/public/styles/globals.css";

import {
  CharacterCard,
  CharacterSkeleton,
  CounterZustand,
  SearchBar,
  ThemeToggle,
} from "@/components/shared/dragon-ball";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context";
import type { ApiResponse, Character } from "@/interfaces";
import { Loader2, RotateCcw, Search } from "lucide-react";

const DragonBallComponent: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { theme } = useTheme();

  // Fetch characters from API
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          "https://dragonball-api.com/api/characters?limit=50"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ApiResponse = await response.json();
        setCharacters(data.items);
      } catch (error) {
        console.error("Error fetching characters:", error);
        setError(
          "Failed to fetch Dragon Ball characters. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  // Optimized search with useMemo
  const filteredCharacters = useMemo(() => {
    if (!searchTerm.trim()) return characters;
    return characters.filter(
      (character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        character.race.toLowerCase().includes(searchTerm.toLowerCase()) ||
        character.affiliation.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [characters, searchTerm]);

  if (error) {
    return (
      <div
        className={`min-h-screen p-4 ${
          theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-gradient-to-br from-orange-50 to-yellow-50 text-gray-900"
        }`}
      >
        <ThemeToggle />
        <div className="container mx-auto px-4 py-8">
          <Alert className="max-w-md mx-auto border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive">
            <AlertDescription className="text-center">{error}</AlertDescription>
          </Alert>
          <div className="text-center mt-4">
            <Button onClick={() => window.location.reload()} variant="outline">
              <RotateCcw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 text-gray-900"
      }`}
    >
      <ThemeToggle />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            Dragon Ball Universe
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the incredible characters from the Dragon Ball universe
            with their powers, transformations, and epic stories
          </p>
        </div>

        {/* Counter */}
        <div className="mb-12">
          <Card>
            <CardTitle>
              <h2 className="my-4 text-5xl font-bold text-center">
                Zustand Counter
              </h2>
            </CardTitle>
            <CardContent>
              <CounterZustand />
            </CardContent>
          </Card>
        </div>

        {/* Search Bar */}
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        {/* Search Results Info */}
        {searchTerm && (
          <div className="text-center mb-8">
            <Alert className="max-w-md mx-auto">
              <Search className="h-4 w-4" />
              <AlertDescription>
                Found <strong>{filteredCharacters.length}</strong> character
                {filteredCharacters.length !== 1 ? "s" : ""}
                matching "<em>{searchTerm}</em>"
              </AlertDescription>
            </Alert>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center mb-8">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">
              Loading Dragon Ball characters...
            </p>
          </div>
        )}

        {/* Characters Grid */}
        <Suspense
          fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(8)].map((_, index) => (
                <CharacterSkeleton key={index} />
              ))}
            </div>
          }
        >
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(12)].map((_, index) => (
                <CharacterSkeleton key={index} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCharacters.map((character) => (
                <CharacterCard key={character.id} character={character} />
              ))}
            </div>
          )}
        </Suspense>

        {/* No Results */}
        {!loading && filteredCharacters.length === 0 && searchTerm && (
          <Card className="max-w-md mx-auto text-center">
            <CardContent className="py-12">
              <div className="text-6xl mb-4">🔍</div>
              <CardTitle className="text-xl mb-2">
                No characters found
              </CardTitle>
              <CardDescription>
                Try searching with a different term like "Goku", "Saiyan", or "Z
                Fighter"
              </CardDescription>
              <Button
                onClick={() => setSearchTerm("")}
                variant="outline"
                className="mt-4"
              >
                Clear Search
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Stats Card */}
        {!loading && characters.length > 0 && (
          <Card className="max-w-2xl mx-auto mt-12">
            <CardHeader>
              <CardTitle className="text-center">
                📊 Universe Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-orange-600">
                    {characters.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Characters
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">
                    {new Set(characters.map((c) => c.race)).size}
                  </div>
                  <div className="text-sm text-muted-foreground">Races</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">
                    {new Set(characters.map((c) => c.affiliation)).size}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Affiliations
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">
                    {
                      characters.filter(
                        (c) => c.transformations && c.transformations.length > 0
                      ).length
                    }
                  </div>
                  <div className="text-sm text-muted-foreground">
                    With Forms
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default DragonBallComponent;
