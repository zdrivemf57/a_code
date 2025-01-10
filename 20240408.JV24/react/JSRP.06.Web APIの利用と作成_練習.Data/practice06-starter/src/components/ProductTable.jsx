import ProductTableRow from "./ProductTableRow";
import { getProducts } from "../api/mockdbApi";
import { useQuery } from "@tanstack/react-query";

/**
 * 製品一覧のテーブル表示
 */
export default function ProductTable() {
  // Tanstack Queryを使ったデータの読み込み
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts
  });

  if (isLoading) {
    return <p className="h3">Loading...</p>;
  }

  return (
    <table className="table table-bordered">
      <thead>
        <tr className="bg-dark text-white">
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
