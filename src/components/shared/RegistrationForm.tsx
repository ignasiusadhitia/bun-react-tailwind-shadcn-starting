import React, { useState } from "react";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import type { RegisteredParticipant, RegistrationFormData } from "@/types";
import {
  convertToParticipant,
  GENDER_OPTIONS,
  isValidAge,
  LEARNING_PATH_OPTIONS,
  logFormEvent,
} from "@/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  Calendar,
  FileText,
  Lock,
  Mail,
  User,
  UserPlus,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ParticipantList } from "./ParticipantList";

export const RegistrationForm: React.FC = () => {
  // State to store registered participants
  const [registeredParticipants, setRegisteredParticipants] = useState<
    RegisteredParticipant[]
  >([]);

  // Initialize TanStack Form
  const form = useForm<
    RegistrationFormData,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any
  >({
    // Default values for form
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      age: 18,
      birthdate: "",
      gender: "male",
      learningPath: [],
      addNotes: false,
      notes: "",
    },

    // Form submission handler
    onSubmit: async ({ value }) => {
      try {
        // Log form submit event
        logFormEvent("submit", undefined, value);

        // Convert form data to participant
        const newParticipant = convertToParticipant(value);

        // Add to participant list
        setRegisteredParticipants((prev) => [...prev, newParticipant]);

        // show success toast
        toast.success("Registration Successful!", {
          description: `Welcome ${value.fullName}! Your registration has been completed.`,
          duration: 5000,
        });

        // Reset form after submit
        form.reset();
      } catch (error) {
        console.error("Form submission error:", error);
        toast.error("Registration Failed", {
          description: "something went wrong. Please try again.",
        });
      }
    },
  });

  /**
   * Generic event handlers for logging
   */
  const handleFieldFocus = (fieldName: string) => {
    logFormEvent("focus", fieldName);
  };

  const handleFieldBlur = (fieldName: string, value: any) => {
    logFormEvent("blur", fieldName, value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">
            Bootcamp Registration
          </h1>
          <p className="text-gray-600">
            Join out intensive programming bootcamp and level up your skills!
          </p>
        </div>

        {/* Main Registration Form */}
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <UserPlus className="w-6 h-6" />
              Registration Form
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
              }}
              className="space-y-6"
            >
              {/* Personal Information Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <User className="w-5 h-5 text-blue-600" />
                  <h2 className="text-lg font-semibold">
                    Personal Information
                  </h2>
                </div>

                {/* Full Name Field */}
                <form.Field name="fullName">
                  {(field) => (
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="field.name"
                        value={field.state.value}
                        onBlur={() =>
                          handleFieldBlur("fullName", field.state.value)
                        }
                        onFocus={() => handleFieldFocus("fullName")}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="Enter your full name"
                        className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                      />
                      {field.state.meta.errors && (
                        <p className="text-sm text-red-600">
                          {field.state.meta.errors}
                        </p>
                      )}
                    </div>
                  )}
                </form.Field>

                {/* Email Field */}
                <form.Field name="email">
                  {(field) => (
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="flex items-center gap-2"
                      >
                        <Mail className="w-4 h-4" />
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        name={field.name}
                        value={field.state.value}
                        onBlur={() =>
                          handleFieldBlur("email", field.state.value)
                        }
                        onFocus={() => handleFieldFocus("email")}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="your.email@example.com"
                        className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  )}
                </form.Field>

                {/* Password Field */}
                <form.Field name="password">
                  {(field) => (
                    <div className="space-y-2">
                      <Label
                        htmlFor="password"
                        className="flex items-center gap-2"
                      >
                        <Lock className="w-4 h-4" />
                        Password *
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        name={field.name}
                        value={field.state.value}
                        onBlur={() => handleFieldBlur("password", "[HIDDEN]")}
                        onFocus={() => handleFieldFocus("password")}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="Create a secure password"
                        className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  )}
                </form.Field>

                {/* Age and Birthdate in a row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Age Field */}
                  <form.Field name="age">
                    {(field) => (
                      <div className="space-y-2">
                        <Label htmlFor="age">Age *</Label>
                        <Input
                          id="age"
                          type="number"
                          min="16"
                          max="60"
                          name={field.name}
                          value={field.state.value}
                          onBlur={() =>
                            handleFieldBlur("age", field.state.value)
                          }
                          onFocus={() => handleFieldFocus("age")}
                          onChange={(e) =>
                            field.handleChange(parseInt(e.target.value) || 18)
                          }
                          className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                        {!isValidAge(field.state.value) && (
                          <p className="text-sm text-amber-600">
                            Age must be between 16 and 60 years
                          </p>
                        )}
                      </div>
                    )}
                  </form.Field>

                  {/* Birthdate Field */}
                  <form.Field name="birthdate">
                    {(field) => (
                      <div className="space-y-2">
                        <Label
                          htmlFor="birthdate"
                          className="flex items-center gap-2"
                        >
                          <Calendar className="w-4 h-4" />
                          Birth Date *
                        </Label>
                        <Input
                          id="birthdate"
                          type="date"
                          name={field.name}
                          value={field.state.value}
                          onBlur={() =>
                            handleFieldBlur("birthdate", field.state.value)
                          }
                          onFocus={() => handleFieldFocus("birthdate")}
                          onChange={(e) => field.handleChange(e.target.value)}
                          className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    )}
                  </form.Field>
                </div>

                {/* Gender Field */}
                <form.Field name="gender">
                  {(field) => (
                    <div className="space-y-2">
                      <Label>Gender *</Label>
                      <Select
                        value={field.state.value}
                        onValueChange={(value) =>
                          field.handleChange(value as "male" | "female")
                        }
                      >
                        <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-blue-500">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          {GENDER_OPTIONS.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </form.Field>
              </div>

              <Separator />

              {/* Learning Path Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-green-600" />
                  <h3 className="text-lg font-semibold">Learning Path</h3>
                </div>

                {/* Learning Path Checkboxes */}
                <form.Field name="learningPath">
                  {(field) => (
                    <div className="space-y-3">
                      <Label>Select Learning Path(s) *</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {LEARNING_PATH_OPTIONS.map((option) => (
                          <div
                            key={option.value}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={option.value}
                              checked={field.state.value.includes(option.value)}
                              onCheckedChange={(checked) => {
                                const currentPaths = field.state.value;
                                if (checked) {
                                  field.handleChange([
                                    ...currentPaths,
                                    option.value,
                                  ]);
                                  logFormEvent(
                                    "checkbox_checked",
                                    "learningPath",
                                    option.value
                                  );
                                } else {
                                  field.handleChange(
                                    currentPaths.filter(
                                      (path) => path !== option.value
                                    )
                                  );
                                  logFormEvent(
                                    "checkbox_unchecked",
                                    "learningPath",
                                    option.value
                                  );
                                }
                              }}
                            />
                            <Label
                              htmlFor={option.value}
                              className="text-sm font-normal cursor-pointer"
                            >
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </form.Field>
              </div>

              <Separator />

              {/* Notes Section with Conditional Rendering */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-semibold">
                    Additional Information
                  </h3>
                </div>

                {/* Add Notes Checkbox */}
                <form.Field name="addNotes">
                  {(field) => (
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="addNotes"
                        checked={field.state.value}
                        onCheckedChange={(checked) => {
                          field.handleChange(!!checked);
                          logFormEvent(
                            checked ? "notes_enabled" : "notes_disabled",
                            "addNotes"
                          );

                          // Reset notes if disabled
                          if (!checked) {
                            form.setFieldValue("notes", "");
                          }
                        }}
                      />
                      <Label htmlFor="addNotes" className="cursor-pointer">
                        Add Notes?
                      </Label>
                    </div>
                  )}
                </form.Field>

                {/* Conditional Rendering - Notes Textarea */}
                <form.Field name="addNotes">
                  {(addNotesField) =>
                    addNotesField.state.value && (
                      <form.Field name="notes">
                        {(notesField) => (
                          <div className="space-y-2 animate-in slide-in-from-top-2 duration-300">
                            <Label htmlFor="notes">Notes</Label>
                            <Textarea
                              id="notes"
                              name={notesField.name}
                              value={notesField.state.value || ""}
                              onBlur={() =>
                                handleFieldBlur("notes", notesField.state.value)
                              }
                              onFocus={() => handleFieldFocus("notes")}
                              onChange={(e) =>
                                notesField.handleChange(e.target.value)
                              }
                              placeholder="Any additional information you'd like to share..."
                              rows={4}
                              className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 resize-none"
                            />
                          </div>
                        )}
                      </form.Field>
                    )
                  }
                </form.Field>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
                  size="lg"
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  Register for Bootcamp
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Participant List - List Rendering */}
        <ParticipantList participants={registeredParticipants} />
      </div>
    </div>
  );
};
