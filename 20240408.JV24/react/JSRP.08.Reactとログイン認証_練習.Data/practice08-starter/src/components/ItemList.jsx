import useGetItems from "../hooks/useGetItems";

export default function ItemList () {
  const { items, isLoading, isError } = useGetItems();

  if (isError) {
    return <div className="alert alert-danger">問題が発生しました</div>;
  }

  if (isLoading) {
    return <p>Loading Items...</p>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>商品名</th>
          <th>値段</th>
          <th>登録者</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.registeredBy}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
