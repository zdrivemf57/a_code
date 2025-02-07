import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ItemNotFound() {
  return (
    <>
      <Alert className="alert alert-danger">お探しの備品は存在しません</Alert>
      <Link to="/item" className="btn btn-primary">
        備品リストに戻る
      </Link>
    </>
  );
}
