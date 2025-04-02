import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import useAuthMemberOnly from "../../hooks/auth/useAuthMemberOnly";
import NavigationBar from "./NavigationBar";

export default function AuthMemberOnly() {
  const isPending = useAuthMemberOnly();

  if (isPending) {
    console.log('★isPending');
    return <div></div>;
  }
  
  return (
    <>
      <NavigationBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
