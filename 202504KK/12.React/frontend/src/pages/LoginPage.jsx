import useLoginMember from "../hooks/auth/useLoginMember";
import LoginForm from "../components/login/LoginForm";
import { Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import FlashMessage from "../components/common/FlashMessage";

export default function LoginPage() {
  const loginMember = useLoginMember();

  // ログイン済みの場合は、備品リストページに遷移
  if(loginMember) {
    return <Navigate to="/item" replace />
  }

  return (
    <Container>
      <h1 className="text-center my-4 fw-normal">備品管理システム</h1>
      <LoginForm />
      <FlashMessage />
    </Container>
  );
}
