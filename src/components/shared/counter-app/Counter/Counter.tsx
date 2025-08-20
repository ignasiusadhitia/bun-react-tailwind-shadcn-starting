import React, { useEffect, useState } from "react";
import Button from "@/components/shared/counter-app/Button/Button";
import type {
  CounterButtonConfig,
  CounterProps,
} from "@/components/shared/counter-app/Counter/Counter.types";

/**
 * Reuseable Counter component
 */

const Counter: React.FC<CounterProps> = ({
  count,
  onDecrement,
  onReset,
  onIncrement,
}) => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false); // Count animation state

  // Button configuration
  const buttons: CounterButtonConfig[] = [
    {
      id: "decrementButton",
      text: "-",
      clickHandler: onDecrement, // decrement function
    },
    {
      id: "resetButton",
      text: "reset",
      variant: "outline",
      disabled: count === 0,
      clickHandler: onReset,
    },
    {
      id: "incrementButton",
      text: "+",
      clickHandler: onIncrement, // increment function
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
    <div className="p-2 border rounded-xl text-center">
      {/* Counter Value */}
      <h2
        className={`text-4xl text-center font-bold my-4 leading-tight transition-transform duration-200 ease-out ${
          isAnimating ? "scale-110" : "scale-100"
        }`}
      >
        {count}
      </h2>
      <div className="flex gap-2">
        {/* Buttons Group */}
        {buttons.map((item) => (
          <Button
            key={item.id}
            text={item.text}
            variant={item.variant}
            disabled={item.disabled}
            onClick={item.clickHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Counter;
