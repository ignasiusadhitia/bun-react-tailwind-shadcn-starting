import React from "react";

export type ButtonVariant = "default" | "outline";

/**
 * Props for reuseable Button component
 */
interface ButtonProps {
  text: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "default",
  disabled = false,
  onClick,
}) => {
  // Default button style
  const baseClass =
    "relative overflow-hidden w-full p-2 rounded-lg font-bold text-xl cursor-pointer transition-all duration-300 ease-out active:scale-95 transform-gpu";

  // Button variants style
  const styles = {
    // Button default style
    default:
      "bg-blue-500 text-white hover:bg-blue-400 hover:scale-105 hover:shadow-xl active:scale-95",

    // Button outline style
    outline:
      "bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-50 hover:scale-105 hover:shadow-xl active:scale-95",

    // Button disabled style
    disabled:
      "bg-gray-300 border-2 border-transparent text-gray-500 cursor-not-allowed pointer-events-none",
  };

  // Button effects style
  const effects =
    "before:absolute before:inset-0 before:bg-white before:opacity-0 before:scale-0 before:rounded-full before:transition-all before:duration-500 before:ease-out hover:before:scale-150 hover:before:opacity-20 after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent after:opacity-0 after:-translate-x-full after:transition-transform after:duration-700 after:ease-out hover:after:translate-x-full hover:after:opacity-30";

  // Selected button variant style
  const variantClass = disabled ? styles.disabled : styles[variant];

  return (
    <button
      className={`${baseClass} ${variantClass} ${!disabled ? effects : ""}`}
      onClick={onClick}
    >
      {text.toUpperCase()}
    </button>
  );
};

export default Button;
