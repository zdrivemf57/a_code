import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { hasValidToken } from "../../helpers/api/authApi";
import useSetFlashMessage from "../common/useSetFlashMessage";

// 認証が必要なページで、トークンをチェックする
export default function useAuthMemberOnly() {
  const [isPending, setIsPending] = useState(true);
  const setFlashMessage = useSetFlashMessage();
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = async () => {
      const {status} = await hasValidToken();
      if (status !== "OK") {
        localStorage.clear();
        setFlashMessage("再度ログインしてください", 3000);
        navigate("/", false);
      }
      setIsPending(false);
    };
    checkToken();
  }, []);

  return isPending;
}
