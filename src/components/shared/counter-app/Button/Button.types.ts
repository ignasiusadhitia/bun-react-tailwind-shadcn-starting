export type ButtonVariant = "default" | "outline";

/**
 * Props for reuseable Button component
 */
export interface ButtonProps {
  text: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick: () => void;
}
