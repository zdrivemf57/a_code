import { useRef, useState } from "react";

export default function ItemList() {
  const itemRef = useRef();
  const [items, setItems] = useState(["りんご", "みかん", "バナナ"]);

  const handleClick = () => {
    const itemName = itemRef.current.value;
    if (itemName) {
      setItems((prev) => [...prev, itemName]);
      itemRef.current.value = "";
    }
  };
  
  return (
    <div>
      <h2>アイテムリスト</h2>
      <p>
        アイテム名: <input type="text" className="me-3" ref={itemRef} />
        <button className="btn btn-primary" onClick={handleClick}>
          追加
        </button>
      </p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
