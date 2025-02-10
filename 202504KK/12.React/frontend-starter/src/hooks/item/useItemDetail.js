import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getItemById } from "../../helpers/api/itemApi";

// URL末尾のID番号に応じて、備品情報を取得する
// 取得した情報は、TanstackQueryを利用してキャッシュする
export default function useItemDetail() {
  // URLの末尾からIDを取得
  const { id } = useParams();

  // 備品の取得
  const { data: item, isLoading, isError } = useQuery({
    queryKey: ["item", id],
    queryFn: async () => {
        const {status, data} = await getItemById(id);
        if(status !== "OK") {
            throw new Error();
        }

        return data;
    }
  });

  return { item, isLoading, isError };
}
