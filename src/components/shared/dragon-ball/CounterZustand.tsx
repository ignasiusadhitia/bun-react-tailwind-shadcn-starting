import Counter from "../counter-app/Counter/Counter";
import { useCounterStore } from "@/store/counterStore";

export const CounterZustand = () => {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <Counter
      count={count}
      onIncrement={increment}
      onDecrement={decrement}
      onReset={reset}
    />
  );
};
