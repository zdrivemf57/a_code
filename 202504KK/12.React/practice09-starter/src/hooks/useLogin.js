import { useState } from "react";
import customAxios from "../helpers/customAxios";
import { useSetAtom } from "jotai";
import { loginUserAtom } from "../atoms/loginUserAtom";

// Axios を使い、ログイン ID とパスワードを送信する関数
async function sendConfidential(loginId, loginPass) {
  const res = await customAxios.post("/auth/login", { loginId, loginPass });
  return res.data;
}

// 上記関数と useState, jotai を連携して利用するカスタムフック
export default function useLogin() {
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const setLoginUser = useSetAtom(loginUserAtom);

  const login = async (loginId, loginPass) => {
    setIsPending(true);

    try {
      const loginUser = await sendConfidential(loginId, loginPass);

      if (loginUser) {
        setLoginUser(loginUser);
        setIsError(false);
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
    }

    setIsPending(false);
  };

  return { login, isPending, isError };
}
