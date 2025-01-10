import { useEffect } from "react";
import { useRef, useState } from "react";

export default function Count () {
  
// レンダリングの回数を数えるプログラム
// ---------------------------------
const [name, setName] = useState('');
const countRef = useRef(1); 
// const [count, setCount] = useState(0);

// もし、 カウント数を [count, setCount] で管理していて、useEffect内で
// setCount(prev => prev + 1); 
// とすると、レンダリングの無限ループになってしまう
useEffect(() => {
  countRef.current = countRef.current + 1;
  // setCount(prev => prev + 1); 
})

return (
    <>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <p>Rendered {countRef.current} times</p>
      {/* <p>Rendered {count} times</p> */}
    </>
  )
}
