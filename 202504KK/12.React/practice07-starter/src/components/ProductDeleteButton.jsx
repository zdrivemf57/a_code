import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../helpers/productsApi";

/**
 * 製品情報の削除ボタン
 */
export default function ProductDeleteButton({ productId }) {
  const queryClient = useQueryClient(); 
  const mutation = useMutation({ 
  mutationFn: () => deleteProduct(productId), 
  onSuccess: () => queryClient.invalidateQueries({ queryKey: ["products"]})
  });

  const handleClick = async () => {
    try {
      await mutation.mutateAsync(); /*productId は削除*/
      alert("削除しました");
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
