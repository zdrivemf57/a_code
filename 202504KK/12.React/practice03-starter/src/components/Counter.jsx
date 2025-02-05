import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h2>クリック回数: {count}</h2>
      <button className="btn btn-success" onClick={handleClick}>
        Click Me!
      </button>
    </div>
  );
}
