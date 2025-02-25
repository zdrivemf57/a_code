import { useEffect, useState } from "react";

// useEffect 依存変数が変更されたときに処理を実行
export default function UseEffectNone() {
  console.log('★開始')
  
  const [data, setData] = useState("")

  useEffect(() => {
    console.log(`★useEffect data=${data}`);
  }, [data])
  
  console.log('★終了')

  return (
    <p><input onChange={(e) => setData(e.target.value)}/></p>
  )
}
