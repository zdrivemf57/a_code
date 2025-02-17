import { useEffect, useState } from "react";

// useEffect タイマーの設定とクリーンナップ
export default function TimerComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => {
      clearInterval(interval); // コンポーネントがアンマウントされたらタイマーを解除
    };
  }, []);

  return <div>経過時間: {seconds} 秒</div>;
}
