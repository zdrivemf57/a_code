import { Link, Outlet } from "react-router-dom";
import { getAllItems } from "../data/itemList";

export default function ItemsLayout () {
  const items = getAllItems();

  return (
    <div>
      <h1 className="my-4">商品情報</h1>
      <div className="row">
        <div className="col-12 col-lg-9">
          <Outlet />
        </div>
        <div className="col-12 col-lg-3">
          <h2 className="h4">商品詳細</h2>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <Link to={`/items/${item.id}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
