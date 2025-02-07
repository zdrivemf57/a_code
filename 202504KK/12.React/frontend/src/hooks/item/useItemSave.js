import { useState } from "react";
import { saveItem } from "../../helpers/api/itemApi";
import useSetFlashMessage from "../common/useSetFlashMessage";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

/**------------------------------------------------------------
 * 備品情報を登録・編集するためのフック
 * 戻り値は、以下を含むオブジェクト
 * save: 登録・編集用関数
 * isPending: サーバーとの通信状態 
 * isError: エラーの有無
 --------------------------------------------------------------*/
export default function useItemSave() {
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const setFlashMessage = useSetFlashMessage();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const save = async (item) => {
    setIsPending(true);

    try {
        const {status, data} = await saveItem(item);
        if(status !== "OK") {
            throw new Error();
        }

        // 保存完了
        // キャッシュをクリア
        await queryClient.invalidateQueries({ queryKey: ["items"] });
        await queryClient.invalidateQueries({ queryKey: ["item", String(data.item.id)] });
        
        // 詳細ページにリダイレクト
        setFlashMessage("備品情報を保存しました", 3000);
        navigate(`/item/detail/${data.item.id}`);
    } catch(error) {
        console.log(error);
        setIsError(true);
    }

    setIsPending(false);
  };

  return {save, isPending, isError};
}
