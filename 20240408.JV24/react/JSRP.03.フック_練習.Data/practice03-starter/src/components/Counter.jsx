import { useState } from "react";

export default function Counter () {
  const [count, setCount] = useState(0);

  const handleClick = e => {
    console.log(count);
    setCount(prev => prev + 1);
    console.log(count);
  };

  const countUpPre = () => {
    console.log(count);
    setCount(prev => prev + 2);
    console.log(count);
};

  const countUp = () => {
    console.log(count);
    setCount(count + 3);
    console.log(count);
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
