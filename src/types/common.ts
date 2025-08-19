/**
 * Generic configuration interface for components that render multiple buttons
 */
export interface GenericButtonConfig<T = any> {
  id: string;
  text: string;
  variant?: string;
  disabled?: boolean;
  clickHandler: (data?: T) => void;
}
