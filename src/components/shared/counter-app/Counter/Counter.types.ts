import type { ButtonVariant } from "@/components/shared/counter-app/Button/Button.types";
import type { GenericButtonConfig } from "@/types/common";

/**
 * Props for Counter component
 */
export interface CounterProps {
  count: number;
  onDecrement: () => void;
  onReset: () => void;
  onIncrement: () => void;
}

/**
 * Specialized GenericButtonConfig for Counter Buttons
 */
export interface CounterButtonConfig extends GenericButtonConfig {
  variant?: ButtonVariant;
  clickHandler: () => void; // more specific typing
}
