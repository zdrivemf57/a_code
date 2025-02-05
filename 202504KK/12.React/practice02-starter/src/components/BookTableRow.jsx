export default function BookTableRow({ book }) {
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.price}円</td>
      <td>{book.isAvailable ? "あり" : "なし"}</td>
    </tr>
  );
}
