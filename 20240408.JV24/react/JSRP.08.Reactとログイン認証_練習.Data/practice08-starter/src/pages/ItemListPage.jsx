import ItemList from "../components/ItemList";
import LoginUserOnly from "../components/LoginUserOnly";

export default function ItemListPage () {
  return (
    <LoginUserOnly>
      <div>
        <h1>商品リスト</h1>
        <ItemList />
      </div>
    </LoginUserOnly>
  );
}
