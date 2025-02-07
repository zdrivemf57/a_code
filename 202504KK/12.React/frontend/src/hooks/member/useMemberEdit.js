import { useState } from "react";
import { updateMember } from "../../helpers/api/memberApi";
import useSetFlashMessage from "../common/useSetFlashMessage";
import { useQueryClient } from "@tanstack/react-query";
import { loginMemberAtom } from "../../atoms/loginMemberAtom";
import { useNavigate } from "react-router-dom";
import { useSetAtom } from "jotai";

/**------------------------------------------------------------
 * 会員情報を編集するためのフック
 * 戻り値は、以下を含むオブジェクト
 * save: 編集用関数
 * isPending: サーバーとの通信状態 
 * isError: エラーの有無
 --------------------------------------------------------------*/
export default function useMemberEdit() {
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const setFlashMessage = useSetFlashMessage();
  const queryClient = useQueryClient();
  const setLoginMember = useSetAtom(loginMemberAtom);
  const navigate = useNavigate();

  const save = async (member) => {
    setIsPending(true);

    try {
      const { status, data } = await updateMember(member);
      // ログインIDが重複
      if (status !== "OK") {
        throw new Error();
      }

      // 保存完了
      // キャッシュをクリア
      await queryClient.invalidateQueries({ queryKey: ["member"] });
      // アトムとローカルストレージで管理している氏名を更新
      setLoginMember((prev) => {
        // トークンはそのままで、氏名だけを更新
        return { ...prev, memberName: data.name };
      });
    
      // 会員情報ページにリダイレクト
      setFlashMessage("会員情報を更新しました", 3000);
      navigate("/member");
    } catch (error) {
      console.log(error);
      setIsError(true);
    }

    setIsPending(false);
  };

  return { save, isPending, isError };
}
