import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../api/mockdbApi";

/**
 * 製品データ１件分の表示コンポーネント
 * 削除機能付き
 */
export default function ProductTableRow({ product }) {
  // Tanstack Queryによるデータの削除
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: () => deleteProduct(product.id),
    onSuccess: () => 
queryClient.invalidateQueries({ queryKey: ["products"] })
  });

  const handleDelete = () => {
    deleteMutation.mutate();
  };

  return (
    <tr className="align-middle">
      <td>{product.name}</td>
      <td>{product.maker}</td>
      <td>{product.price}円</td>
      <td>
        <button className="btn btn-danger" onClick={handleDelete}>
          削除
        </button>
      </td>
    </tr>
  );
}
