import { useEffect, useState } from "react";

// useEffect 依存変数が変更されたときに処理を実行
export default function CounterComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`カウントが ${count} に変わりました`);
  }, [count]); // count が変わるたびに実行

  return <button onClick={() => setCount((count) => count + 1)}>クリック: {count}</button>;
}
