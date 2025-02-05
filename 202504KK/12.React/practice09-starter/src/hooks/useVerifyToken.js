import { useEffect, useState } from "react";
import customAxios from "../helpers/customAxios";
import useGetLoginUser from "./useGetLoginUser";

// トークンを検証するフック
export default function useVerifyToken() {
  const loginUser = useGetLoginUser();
  const [isTokenVerified, setIsTokenVerified] = useState(null);

  useEffect(() => {
    const checkTokenValidity = async () => {
      // 1. トークンの有無をチェックする
      if (!loginUser || !loginUser.token) {
        setIsTokenVerified(false);
        return;
      }

      // 2. トークンの有効性をチェックする
      try {
        await customAxios.get("/auth/verify");
        setIsTokenVerified(true);
      } catch (error) {
        console.log(error);
        setIsTokenVerified(false);
      }
    };

    checkTokenValidity();
  }, [loginUser]);
  
  return { loginUser, isTokenVerified };
}
