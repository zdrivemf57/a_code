import ItemList from "../components/ItemList";
import useGetItems from "../hooks/useGetItems";
export default function ItemListPage() {
  const { items, isLoading, isError } = useGetItems();

  if (isError) {
    return <div className="alert alert-danger">問題が発生しました</div>;
  }

  if (isLoading) {
    return <p>Loading Items...</p>;
  }
  
  return (
    <div>
      <h1>商品リスト</h1>
      <ItemList items={items} />
    </div>
  );
}
