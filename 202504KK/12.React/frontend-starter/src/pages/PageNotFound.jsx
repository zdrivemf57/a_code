import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <Container className="text-center">
      <h1 className="my-4 fw-normal">備品管理システム</h1>
      <p>お探しのページは見つかりませんでした。</p>
      <Link to="/" className="btn btn-primary">
        ホームに戻る
      </Link>
    </Container>
  );
}
