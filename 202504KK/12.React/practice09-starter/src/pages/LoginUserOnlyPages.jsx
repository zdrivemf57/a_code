import { Navigate, Outlet } from "react-router-dom";
import useVerifyToken from "../hooks/useVerifyToken";

/**
 * アクセス制御を行うコンポーネント
 * 1. トークンの有無をチェックする
 * 2. トークンの有効性をチェックする
 */
export default function LoginUserOnlyPages() {
  const { loginUser, isTokenVerified } = useVerifyToken();

  if (isTokenVerified === null) {
    return <div>Loading...</div>;
  }

  if (!loginUser || !isTokenVerified) {
    return <Navigate to="/" replace={true} />;
  }
  
  return <Outlet />;
}
