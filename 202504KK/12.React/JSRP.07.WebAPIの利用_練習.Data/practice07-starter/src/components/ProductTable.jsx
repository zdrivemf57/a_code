import ProductTableRow from "./ProductTableRow";

/**
 * 製品一覧の表示用コンポーネント
 */
export default function ProductTable({ products }) {
  return (
    <table className="table table-bordered">
      <thead className="table-dark">
        <tr>
          <th>製品名</th>
          <th>メーカー</th>
          <th>価格</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductTableRow key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
}
