import { useSetAtom } from "jotai";
import customAxios from "../helpers/customAxios";
import { loginUserAtom } from "../atoms/loginUserAtom";
import { useNavigate } from "react-router-dom";

// Axiowを使いログアウトのためのリクエストを送信
// React側で保持しているユーザー情報も破棄し、トップページへリダイレクトする
export default function useLogout () {
  const setLoginUser = useSetAtom(loginUserAtom);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const res = await customAxios.get("/auth/logout");
      console.log(res.data);
      setLoginUser(null);
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.log("failed to logout");
      console.log(error);
    }
  };

  return logout;
}
