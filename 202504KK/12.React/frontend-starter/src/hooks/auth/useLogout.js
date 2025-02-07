import { useSetAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { loginMemberAtom } from "../../atoms/loginMemberAtom";
import { sendLogoutRequest } from "../../helpers/api/authApi";
import useSetFlashMessage from "../common/useSetFlashMessage";

// 以下の処理を行う関数を返す
// 1. サーバー側で保持している認証情報を破棄するためのリクエストを送信
// 2. 併せて React 側で保持している認証情報も破棄
// 3. トップページへリダイレクト
export default function useLogout() {
  const setLoginMember = useSetAtom(loginMemberAtom);
  const setFlashMessage = useSetFlashMessage();
  const navigate = useNavigate();

  const logout = async (flashMessageBody) => {
    // サーバーに認証情報破棄のリクエスト送信
    const { status } = await sendLogoutRequest();
    if (status !== "OK") {
      console.log("ログアウトのリクエスト送信失敗");
    }

    // ローカルの認証情報を破棄
    setLoginMember(null);
    localStorage.clear();

    // ログアウト完了のメッセージを 3 秒間表示
    setFlashMessage(flashMessageBody, 3000);
    
    // トップページにリダイレクト
    navigate("/");
  };
  return logout;
}
