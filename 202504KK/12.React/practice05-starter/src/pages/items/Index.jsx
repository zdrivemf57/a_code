import { Link } from "react-router-dom";
import { getAllItems } from "../../data/itemList";

export default function Index() {
  const items = getAllItems();

  return (
    <div>
      <h1>商品ホーム</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
