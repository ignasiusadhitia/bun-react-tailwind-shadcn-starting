/**
 * Data type for gender
 */
export type Gender = "male" | "female";

/**
 * Data type for available learning path
 */
export type LearningPath = "frontend" | "backend" | "devops" | "uiux";

/**
 * Interface for registration form data
 * Notes is optional
 */
export interface RegistrationFormData {
  fullName: string;
  email: string;
  password: string;
  age: number;
  birthdate: string;
  gender: Gender;
  learningPath: LearningPath[];
  addNotes: boolean;
  notes?: string; // Optional field - show if adNotes is `true`
}

/**
 * Interface for registered participant data
 * Omit password for security (when displaying data to public)
 */
export interface RegisteredParticipant
  extends Omit<RegistrationFormData, "password" | "addNotes"> {
  id: string;
  registeredAt: Date;
}
