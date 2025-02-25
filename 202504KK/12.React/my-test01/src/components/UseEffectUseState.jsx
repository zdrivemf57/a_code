import { useEffect, useState } from "react";

// useEffect 依存変数が変更されたときに処理を実行
export default function UseEffectUseState() {
  console.log('★開始')
  
  const [count, setCount] = useState(0);
  const [refS, setRefS] = useState(0);

  useEffect(() => {
    setRefS(count); // useEffectでuseStateを変更しているので再レンダリングが起きる。
    console.log(`★useEffect count=${count}`);
  }, [count])
  
  console.log('★終了')

  return (<>
    <button onClick={() => setCount((count) => count + 1)}>クリック: {count}</button>
    <button>{refS}</button>
  </>)
}
