import BookTableRow from "./BookTableRow";

export default function BookTable ({books}) {
  return (
    <>
      <h3>写真集・書籍</h3>
      <table className="book-table">
        <thead style={{ backgroundColor: "#333", color: "#ddd" }}>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>値段</th>
            <th>在庫</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <BookTableRow key={book.id} book={book} />
          ))}
        </tbody>
      </table>
    </>
  );
}
