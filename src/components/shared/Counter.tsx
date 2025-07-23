import React, { useEffect, useState } from "react";
import Button from "@/components/shared/Button";

interface ButtonConfig {
  id: string;
  text: string;
  clickHandler: () => void;
}

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0); // Count state
  const [isAnimating, setIsAnimating] = useState<boolean>(false); // Count animation state

  // Decrement function: decrease count by 1
  const decrement = (): void => {
    setCount((prev: number) => prev - 1);
  };

  // Increment function: increase count by 1
  const increment = (): void => {
    setCount((prev: number) => prev + 1);
  };

  // Button configuration
  const buttons: ButtonConfig[] = [
    {
      id: "decrementButton",
      text: "-",
      clickHandler: decrement, // decrement function
    },
    {
      id: "incrementButton",
      text: "+",
      clickHandler: increment, // increment function
    },
  ];

  // Trigger animation when count changes
  useEffect((): (() => void) => {
    // Set animation state to true immediately when count changes (set scale to 110)
    setIsAnimating(true);

    // Create timer to automatically reset the animation state (after 200ms, set scale to normal)
    const timer: NodeJS.Timeout = setTimeout(() => setIsAnimating(false), 200);

    // cleanup function to clear the timer when component unmounts, this will prevent memory leaks and ensure proper cleanup
    return (): void => clearTimeout(timer);
  }, [count]); // Dependency array: effect runs whenever 'count' value changes

  return (
    <div className="p-2 border rounded-xl">
      {/* Counter Value */}
      <h2
        className={`text-4xl font-bold my-4 leading-tight transition-transform duration-200 ease-out ${
          isAnimating ? "scale-110" : "scale-100"
        }`}
      >
        {count}
      </h2>
      <div className="flex gap-2">
        {/* Buttons Group */}
        {buttons.map((item) => (
          <Button key={item.id} text={item.text} onClick={item.clickHandler} />
        ))}
      </div>
    </div>
  );
};

export default Counter;
