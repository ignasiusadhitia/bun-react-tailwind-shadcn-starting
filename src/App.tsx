import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Counter from "@/components/shared/Counter";
import "@/public/styles/globals.css";

import logo from "@/public/images/logo.svg";
import reactLogo from "@/public/images/react.svg";

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
          <Counter
            count={count}
            onDecrement={decrement}
            onIncrement={increment}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
