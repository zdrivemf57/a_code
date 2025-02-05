export default function ItemList({ items }) {
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
