import ProductRegistation from "../components/ProductRegistration";
import ProductTable from "../components/ProductTable";

export default function Products() {
  return (
    <>
      <h2 className="mb-3">製品情報</h2>
      {/* 製品追加フォーム */}
      <ProductRegistation />
      {/* 製品一覧テーブル */}
      <ProductTable />
    </>
  );
}
