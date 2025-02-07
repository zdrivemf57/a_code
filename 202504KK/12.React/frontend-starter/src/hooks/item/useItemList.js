import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { itemPageAtom } from "../../atoms/itemPageAtom";
import { getItems } from "../../helpers/api/itemApi";

// アトムに保持しているページ番号に基づき、備品情報を取得する
// 取得した情報は、TanstackQuery を利用してキャッシュする
export default function useItemList() {
  const [{ currentPage }, setItemPage] = useAtom(itemPageAtom);

  const {
    data: itemList,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["items", currentPage],
    queryFn: async () => {
      const { status, data } = await getItems(currentPage);
      if (status !== "OK") {
        throw new Error();
      }
      
      // 全体のページ数を設定
      setItemPage((prev) => {
        return { ...prev, totalPages: data.totalPages };
      });
      return data.itemList;
    }
  });

  return { itemList, isLoading, isError };
}
