import ProductDeleteButton from "./ProductDeleteButton";

/**
 * 製品データ１件分の表示コンポーネント
 */
export default function ProductTableRow({ product, setProducts }) {
  return (
    <tr className="align-middle">
      <td>{product.name}</td>
      <td>{product.maker}</td>
      <td>{product.price}円</td>
      <td><ProductDeleteButton productId={product.id} setProducts={setProducts} /></td>
    </tr>
  );
}
