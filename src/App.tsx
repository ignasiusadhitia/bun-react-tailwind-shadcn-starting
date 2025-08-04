import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Button from "@/components/shared/Button/Button";
import Counter from "@/components/shared/Counter/Counter";
import "@/public/styles/globals.css";

import logo from "@/public/images/logo.svg";
import reactLogo from "@/public/images/react.svg";

/**
 * Root App Component
 */

export function App() {
  const [count, setCount] = useState<number>(0); // Count state

  // Decrement function: decrease count by 1
  const decrement = (): void => {
    setCount((prev: number) => prev - 1);
  };

  // Increment function: increase count by 1
  const increment = (): void => {
    setCount((prev: number) => prev + 1);
  };

  // Reset function: set count to 0
  const reset = (): void => {
    setCount(0);
  };
  return (
    <div className="container mx-auto p-8 text-center relative z-10">
      <div className="flex justify-center items-center gap-8 mb-8">
        <img
          src={logo}
          alt="Bun Logo"
          className="h-36 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa] scale-120"
        />
        <img
          src={reactLogo}
          alt="React Logo"
          className="h-36 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] [animation:spin_20s_linear_infinite]"
        />
      </div>

      <Card className="bg-card/50 backdrop-blur-sm border-muted">
        <CardContent className="pt-6">
          <h1 className="text-5xl font-bold my-4 leading-tight">Counter</h1>
          {/* Counter */}
          <Counter
            count={count}
            onDecrement={decrement}
            onReset={reset}
            onIncrement={increment}
          />

          {/* Reset button from App.jsx*/}
          <div className="mt-4">
            <Button
              text="reset from app"
              variant="outline"
              disabled={count === 0}
              onClick={reset}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
