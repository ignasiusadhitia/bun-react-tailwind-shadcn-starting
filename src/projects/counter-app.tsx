import { useState } from "react";
import Button from "@/components/shared/counter-app/Button/Button";
import Counter from "@/components/shared/counter-app/Counter/Counter";
import { Card, CardContent } from "@/components/ui/card";

const CounterAppComponent: React.FC = () => {
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
    <Card className="w-full mt-8 bg-card/50 backdrop-blur-sm border-muted">
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
  );
};

export default CounterAppComponent;
