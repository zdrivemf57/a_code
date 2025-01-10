import { useSetAtom } from "jotai";
import customAxios from "../helpers/customAxios";
import { loginUserAtom } from "../atoms/loginUserAtom";
import { useState } from "react";

// Axiosを使い、ログインIDとパスワードを送信する関数
async function sendConfidential (loginId, loginPass) {
  let loginUser = null;

  try {
    const res = await customAxios.post("/auth/login", { loginId, loginPass });
    const data = res.data;
    if (data.error) {
      throw new Error(data.error);
    }
    loginUser = res.data;
  } catch (error) {
    console.log("failed to login");
    console.log(error);
  }

  return loginUser;
}

// 上記関数とuseState, jotaiを連携して利用するカスタムフック
export default function useLogin () {
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);

  const setLoginUser = useSetAtom(loginUserAtom);

  const login = async (loginId, loginPass) => {
    setIsPending(true);
    const loginUser = await sendConfidential(loginId, loginPass);

    setIsPending(false);
    if (loginUser) {
      setLoginUser(loginUser);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  return { login, isPending, isError };
}
