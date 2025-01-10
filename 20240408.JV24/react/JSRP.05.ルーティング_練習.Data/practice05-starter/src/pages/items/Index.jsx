import { Link } from "react-router-dom";
import { getAllItems } from "../../data/itemList";

export default function Index () {
  const items = getAllItems();

  return (
    <div>
      <h2>商品について</h2>
      <p>日本各地に直接足を運び、厳選した商品を取り扱っています。</p>
    </div>
  );
}
