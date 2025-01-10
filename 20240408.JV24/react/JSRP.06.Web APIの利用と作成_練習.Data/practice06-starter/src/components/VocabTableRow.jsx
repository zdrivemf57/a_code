import { Link } from "react-router-dom";

/**
 * 単語１件分を表示するためのコンポーネント
 */
export default function VocabTableRow({ vocab }) {
  // 単語情報を分割
  const { id, word, meaning } = vocab;

  return (
    <tr className="align-middle">
      <td>{word}</td>
      <td>{meaning}</td>
      <td>
        <Link className="btn btn-success" to={`/vocabs/details/${id}`}>
          詳細
        </Link>
      </td>
    </tr>
  );
}
