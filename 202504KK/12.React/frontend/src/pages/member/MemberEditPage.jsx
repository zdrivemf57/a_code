import { Link } from "react-router-dom";
import { Alert, Col, Container, Row } from "react-bootstrap";
import useMemberGet from "../../hooks/member/useMemberGet";
import MemberEditForm from "../../components/member/MemberEditForm";

export default function MemberEditPage() {
  const { member, isError } = useMemberGet();

  let mainContent;

  if (isError) {
    mainContent = (
      <Alert variant="danger" className="mt-5">
        会員情報を取得できませんでした
      </Alert>
    );
  } else {
    mainContent = <MemberEditForm member={member} />;
  }

  return (
    <Container>
      <h1 className="text-center my-4 fw-normal">会員情報の編集</h1>
      <Row className="justify-content-center">
        <Col sm={10} lg={6}>
          {mainContent}
          <Link to="/member" className="btn btn-secondary w-100 mt-2">
            キャンセル
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
