import { useNavigate, useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { itemPageAtom } from "../../atoms/itemPageAtom";
import { deleteItemById } from "../../helpers/api/itemApi";
import { useQueryClient } from "@tanstack/react-query";

// 備品削除後、備品リストへリダイレクトする
// 備品削除時にトータルページ数が変化することも鑑みて、リダイレクト時のページ番号を設定
// → これらの処理を定義した関数を返す
export default function useItemDelete() {
  const queryClient = useQueryClient();
  const { id } = useParams();
  console.log('★useItemDelete_id',id)


  const navigate = useNavigate();
  const [itemPage, setItemPage] = useAtom(itemPageAtom);
  const deleteItem = async (itemId) => {
      console.log('★useItemDelete_itemId',itemId)
    // 備品の削除 → 削除後のトータルのページ数を取得
    const {status, data} = await deleteItemById(itemId);

    if(status === "OK") {
        // キャッシュをクリア（取得済みのキャッシュを更新）
        queryClient.invalidateQueries({ queryKey: ["items"] });

        // トータルのページ数が現在ページに影響を与える場合の処理
        let currentPage = itemPage.currentPage;
        if (currentPage > data.totalPages) {
          currentPage = data.totalPages;
        }

        // ページ番号の設定
        setItemPage({ totalPages: data.totalPages, currentPage });
    }


    // 備品リストページへのリダイレクト
    navigate("/item");
  };

  return deleteItem;
}