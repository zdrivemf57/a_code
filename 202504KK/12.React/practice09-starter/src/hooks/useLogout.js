import { useSetAtom } from "jotai";
import { loginUserAtom } from "../atoms/loginUserAtom";
import { useNavigate } from "react-router-dom";
import customAxios from "../helpers/customAxios";

// Axios を使いログアウトのためのリクエストを送信
// React 側で保持しているユーザー情報も破棄し、トップページへリダイレクトする
// logout処理を行うlogout関数を返す
export default function useLogout() {
  const setLoginUser = useSetAtom(loginUserAtom);
  const navigate = useNavigate();
  // logout処理を行う
  const logout = async () => {
    await customAxios.get("/auth/logout");
    setLoginUser(null);
    localStorage.clear();
    navigate("/");
  };
  
  return logout;
}
