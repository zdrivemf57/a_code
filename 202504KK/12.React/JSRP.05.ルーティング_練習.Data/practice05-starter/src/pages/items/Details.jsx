import { Link, Navigate, useParams } from "react-router-dom";
import { getItemById } from "../../data/itemList";

export default function Details() {
  const params = useParams();
  // パラメータが整数か確認
  const regex = /^\d+$/;
  if (!regex.test(params.id)) {
    return <Navigate to="/items" replace />;
  }
  console.log('a')

  // 商品の取得
  const id = Number(params.id);
  const item = getItemById(id);

  return (
    <div>
      <h2>{item?.name}</h2>
      <ul>
        <li>{item?.place}産</li>
        <li>{item?.price}円</li>
      </ul>
      <p>
        <Link to="/items">商品ホームに戻る</Link>
      </p>
    </div>
  );
}
