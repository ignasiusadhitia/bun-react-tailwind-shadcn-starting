import type {
  LearningPath,
  RegisteredParticipant,
  RegistrationFormData,
} from "@/types";

/**
 * Learning path label mapping
 */
export const LEARNING_PATH_LABELS: Record<LearningPath, string> = {
  frontend: "Frontend Development",
  backend: "Backend Development",
  devops: "DevOps Engineering",
  uiux: "UI/UX Design",
};

/**
 * Options for gender select
 */
export const GENDER_OPTIONS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

/**
 * Options for learning path checkbox
 */
export const LEARNING_PATH_OPTIONS = [
  { value: "frontend" as LearningPath, label: "Frontend Development" },
  { value: "backend" as LearningPath, label: "Backend Development" },
  { value: "devops" as LearningPath, label: "DevOps Engineering" },
  { value: "uiux" as LearningPath, label: "UI/UX Design" },
];

/**
 * Generate unique ID for participant
 */
export const generateParticipantId = (): string => {
  return `participant_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Convert form data to registered participant
 * Omit password and addNotes for security
 */
export const convertToParticipant = (
  formData: RegistrationFormData
): RegisteredParticipant => {
  const { password, addNotes, ...participantData } = formData;

  return {
    ...participantData,
    id: generateParticipantId(),
    registeredAt: new Date(),
  };
};

/**
 * Date format for display
 */
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

/**
 * Validate age range (min 16 years old, max 60 years old)
 */
export const isValidAge = (age: number): boolean => {
  return age >= 16 && age <= 60;
};

/**
 * Log form events for debugging and monitoring
 */
export const logFormEvent = (
  eventType: string,
  fieldName?: string,
  value?: any
): void => {
  const timestamp = new Date().toISOString();
  const logMessage = fieldName
    ? `[${timestamp}] Form Event: ${eventType} on field "${fieldName} with value:${value}`
    : `[${timestamp} Form Event: ${eventType}]`;

  console.log(logMessage);

  if (eventType === "submit") {
    alert(`Form submitted successfully at ${timestamp}`);
  }
};
