import { Alert, Col, Container, Row } from "react-bootstrap";
import useMemberGet from "../../hooks/member/useMemberGet";
import MemberDetail from "../../components/member/MemberDetail";
import { Link } from "react-router-dom";
import FlashMessage from "../../components/common/FlashMessage";

export default function MemberDetailPage() {
  const { member, isError } = useMemberGet();

  let mainContent;

  if (isError) {
    mainContent = (
      <Alert variant="danger" className="mt-5">
        会員情報を取得できませんでした
      </Alert>
    );
  } else {
    mainContent = <MemberDetail member={member} />;
  }

  return (
    <Container>
      <h1 className="text-center my-4 fw-normal">会員情報</h1>
      <Row className="justify-content-center">
        <Col sm={10} lg={6}>
          {mainContent}
          <Link to="/member/edit" className="btn btn-primary w-100">
            会員情報の編集
          </Link>
        </Col>
      </Row>
      <FlashMessage />
    </Container>
  );
}
