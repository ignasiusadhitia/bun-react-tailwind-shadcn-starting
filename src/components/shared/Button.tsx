import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="relative overflow-hidden w-full p-2 rounded-lg bg-blue-500 
      text-white font-bold text-xl cursor-pointer transition-all duration-300 ease-out
      hover:bg-blue-400 hover:scale-105 hover:shadow-xl
      active:scale-95 transform-gpu
      before:absolute before:inset-0 before:bg-white before:opacity-0 before:scale-0
      before:rounded-full before:transition-all before:duration-500 before:ease-out
      hover:before:scale-150 hover:before:opacity-20
      after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent 
      after:via-white after:to-transparent after:opacity-0 after:-translate-x-full
      after:transition-transform after:duration-700 after:ease-out
      hover:after:translate-x-full hover:after:opacity-30"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
