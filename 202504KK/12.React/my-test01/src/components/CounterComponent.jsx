import { useEffect, useState } from "react";

// useEffect 依存変数が変更されたときに処理を実行
export default function CounterComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`カウントが ${count} に変わりました`);
  }, [count]); // count が変わるたびに実行

  const handleClick = (e) => {
    const strNum = numberRef.current.value;
    setNumbers((prev) => [...prev, Number(strNum)]);
    numberRef.current.value = 0;
  };

  console.log('★useEffect前')
  useEffect(() => {
    console.log('★useEffect中')
    setTimeout(() => {
      console.log('★useEffect中_10秒待ち')
      const total = numbers.reduce((accum, num) => accum + num, 0);
      setSum(total);
      if (numbers.length > 0) {
        setAverage(total / numbers.length);
      }
    }, 10000);
  }, [numbers]);
  console.log('★useEffect後')



  return (<>
    <button onClick={() => setCount((count) => count + 1)}>クリック: {count}</button>);
    <button onClick={handleClick}>クリック: {count}</button>;
  </>)
}
