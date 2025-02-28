import { deleteProduct, getProducts } from "../helpers/productsApi";
/**
 * 製品情報の削除ボタン
 */
export default function ProductDeleteButton({ productId, setProducts }) {
  // リダイレクトの為のフック
  // const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await deleteProduct(productId);
      alert("削除しました");
      // ① 最新のデータを取得して state を更新
      const newData = await getProducts(); // ← 追加
      setProducts(newData);                // ← 追加
      // ② リダイレクト
      // navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
      alert("エラーが発生しました");
    }
  };
  return (
    <button className="btn btn-warning" onClick={handleClick}>
      削除
    </button>
  );
}
