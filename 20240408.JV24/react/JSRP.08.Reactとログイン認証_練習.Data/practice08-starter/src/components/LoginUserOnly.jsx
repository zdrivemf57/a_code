import { Navigate } from "react-router-dom";
import useTokenValidation from "../hooks/useTokenValidator";

/**
 * アクセス制御を行うコンポーネント
 * 1. トークンの有無をチェックする
 * 2. トークンの有効性をチェックする
 */
export default function LoginUserOnly ({ children }) {
  const { loginUser, isTokenValid } = useTokenValidation();

  if (isTokenValid === null) {
    return <div>Loading...</div>;
  }

  if (!loginUser || !isTokenValid) {
    return <Navigate to="/" replace={true} />;
  }

  return <>{children}</>;
}
