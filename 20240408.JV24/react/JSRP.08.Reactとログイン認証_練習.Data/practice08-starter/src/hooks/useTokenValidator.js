import { useEffect, useState } from "react";
import useGetLoginUser from "./useGetLoginUser";
import customAxios from "../helpers/customAxios";

export default function useTokenValidation () {
  const loginUser = useGetLoginUser();
  const [isTokenValid, setIsTokenValid] = useState(null);

  useEffect(() => {
    const checkTokenValidity = async () => {
      if (!loginUser || !loginUser.token) {
        setIsTokenValid(false);
        return;
      }

      try {
        const response = await customAxios.post("/auth/check-token", {
          token: loginUser.token
        });
        if (response.data === "OK") {
          setIsTokenValid(true);
        } else {
          setIsTokenValid(false);
        }
      } catch (error) {
        setIsTokenValid(false);
      }
    };

    checkTokenValidity();
  }, [loginUser]);

  return { loginUser, isTokenValid };
}
