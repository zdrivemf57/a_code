import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <h1>ページが見つかりません</h1>
      <Link className="btn btn-primary" to="/" replace>
        ホームに戻る
      </Link>
    </div>
  );
}
