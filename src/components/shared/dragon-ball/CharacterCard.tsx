import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Character } from "@/interfaces";

export const CharacterCard: React.FC<{ character: Character }> = ({
  character,
}) => {
  const getAffiliationVariant = (affiliation: string) => {
    const lowerAffiliation = affiliation.toLowerCase();
    if (lowerAffiliation.includes("z fighter")) return "default";
    if (lowerAffiliation.includes("villain")) return "destructive";
    if (lowerAffiliation.includes("army")) return "secondary";
    return "outline";
  };

  const getKiColor = (ki: string) => {
    const kiNum = parseInt(ki.replace(/[^\d]/g, ""));
    if (kiNum > 1000000) return "text-red-600 dark:text-red-400 font-bold";
    if (kiNum > 100000)
      return "text-red-600 dark:text-orange-400 font semibold";
    if (kiNum > 10000) return "text-yellow-600 dark:text-yellow-400";
    return "text-green-600 dark:text-green-400";
  };

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-orange-300 dark:hover:border-orange-700">
      <div className="relative overflow-hidden">
        <img
          src={character.image}
          alt={character.name}
          className="w-auto h-64 p-4 mx-auto group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY5NTAwIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSI0OCI+REI8L3RleHQ+Cjwvc3ZnPgo=";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-bold drop-shadow-lg">{character.name}</h3>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-gray-900 dark:text-white">
          {character.name}
        </CardTitle>
        <CardDescription className="text-sm">
          {character.race} • {character.gender}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Race:</span>
            <span className="font-medium">{character.race}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">Gender:</span>
            <span className="font-medium">{character.gender}</span>
          </div>

          <div className="flex justify-between col-span-2">
            <span className="text-muted-foreground">Ki Power:</span>
            <span className={`font-semibold ${getKiColor(character.ki)}`}>
              {character.ki}
            </span>
          </div>
        </div>

        {character.affiliation && (
          <div className="flex justify-center">
            <Badge
              variant={getAffiliationVariant(character.affiliation)}
              className="text-xs"
            >
              {character.affiliation}
            </Badge>
          </div>
        )}

        {character.description && (
          <p className="text-sm text-muted-foreground line-clamp-2 pt-2 border-t">
            {character.description}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
