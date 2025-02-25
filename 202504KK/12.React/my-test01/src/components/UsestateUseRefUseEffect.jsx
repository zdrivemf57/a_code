import { useEffect, useRef, useState } from "react";

// useEffect 依存変数が変更されたときに処理を実行
export default function UestateUseRefUseEffect() {
  console.log('★レンダリング開始')
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [sumS, setSumS] = useState(0);
  const sumR = useRef(0);
  const [data, setData] = useState("")

  useEffect(() => {
    console.log(`★useEffect1 count=${count}`);
  }, [count]); // count が変わるたびに実行

  const handleClick = () => {
    setCount2((prev) => prev + 1);
    // setCount2(1); この処理だと値が変わらないので再レンダリングは起きない。
  };


  useEffect(() => {
    setSumS(count); // useEffectでuseStateを変更しているので再レンダリングが起きる。
    console.log(`★useEffect2 count=${count}`);
  }, [count])
  
  useEffect(() => {
    sumR.current = count2; // useEffectでuseRefの変更をしても再レンダリングは起きない。
    console.log(`★useEffect3 count2=${count2}`);
  }, [count2])
  
  useEffect(() => {
    console.log(`★useEffect4 data=${data}`);
  })
  
  console.log('★レンダリング終了')

  return (<>
    <button onClick={() => setCount((count) => count + 1)}>クリック: {count}</button>
    <button>useState: {sumS}</button>
    <button onClick={handleClick}>クリック: {count2}</button>
    <button>useRef: {sumR.current}</button>
    <input onChange={(e) => setData(e.target.value)}/>
  </>)
}
