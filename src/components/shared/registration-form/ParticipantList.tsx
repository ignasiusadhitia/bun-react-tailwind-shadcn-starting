import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { RegisteredParticipant } from "@/types";
import { formatDate, LEARNING_PATH_LABELS } from "@/utils";
import {
  BookOpen,
  Calendar,
  Code,
  FileText,
  Mail,
  MapPin,
  Users,
} from "lucide-react";
import { useState } from "react";

interface ParticipantListProps {
  participants: RegisteredParticipant[];
}

/**
 * ParticipantList component to display registered participants
 */
export const ParticipantList: React.FC<ParticipantListProps> = ({
  participants,
}) => {
  // State for toggle between card and JSON display
  const [viewMode, setViewMode] = useState<"cards" | "json">("cards");

  // Conditional rendering - when there is not participants registered yet
  if (participants.length === 0) {
    return (
      <Card className="w-full max-w-4xl mx-auto mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Registered Participants
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No participants registered yet.</p>
            <p className="text-sm">Be the first to join out bootcamp!</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  /**
   * Render individual participant card
   */
  const renderParticipantCard = (participant: RegisteredParticipant) => (
    <Card key={participant.id} className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{participant.fullName}</CardTitle>
            <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
              <Calendar className="w-3 h-3" />
              {formatDate(participant.registeredAt)}
            </p>
          </div>
          <Badge variant="secondary" className="capitalize">
            {participant.gender}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* contact Information */}
        <div className="flex items-center gap-2 text-sm">
          <Mail className="w-4 h-4 text-muted-foreground" />
          <span>{participant.email}</span>
        </div>

        {/* Age and Birthdate */}
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span>age: {participant.age}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Born: </span>
            <span>
              {new Date(participant.birthdate).toLocaleDateString("id,ID")}
            </span>
          </div>
        </div>

        {/* Learning Paths */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">Learning Paths:</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {participant.learningPath.map((path) => (
              <Badge key={path} variant="outline" className="text-xs">
                <Code className="w-3 h-3 mr-1" />
                {LEARNING_PATH_LABELS[path]}
              </Badge>
            ))}
          </div>
        </div>

        {/* Notes - Conditional rendering */}
        {participant.notes && (
          <div className="pt-2 border-t">
            <div className="flex items-start gap-2">
              <FileText className="w-4 h-4 text-muted-foreground mt-0 5" />
              <div className="flex-1">
                <span className="text-sm font-medium">Notes:</span>
                <p className="text-sm text-muted-foreground mt-1 italic">
                  "{participant.notes}"
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 space-y-6">
      {/* Header with toggle view mode */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Registered Participants({participants.length})
            </CardTitle>

            {/* Toggle buttons for view mode */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === "cards" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("cards")}
              >
                Card View
              </Button>
              <Button
                variant={viewMode === "json" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("json")}
              >
                JSON View
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* conditional rendering based on view mode */}
      {viewMode === "cards" ? (
        // List rendering with cards
        <div className="grid gap-4 md:grid-cols-2">
          {participants.map(renderParticipantCard)}
        </div>
      ) : (
        // JSON view
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Participants Data (JSON)</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg overflow-auto text-sm">
              {JSON.stringify(participants, null, 2)}
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
