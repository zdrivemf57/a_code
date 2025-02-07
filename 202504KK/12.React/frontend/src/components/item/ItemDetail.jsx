import { useState } from "react";
import { Link } from "react-router-dom";
import { formatDateTime, formatNumber } from "../../helpers/formatter";
import ItemDeleteModal from "./ItemDeleteModal";
import FlashMessage from "../common/FlashMessage";

export default function ItemDetail({ item }) {
  const { id, name, amount, location, registered, updated, note } = item;
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <table className="table table-bordered table-hover detail-table">
        <tbody>
          <tr>
            <th className="bg-secondary text-white">備品ID</th>
            <td>{id}</td>
          </tr>
          <tr>
            <th className="bg-secondary text-white">備品名</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th className="bg-secondary text-white">数量</th>
            <td>{formatNumber(amount)}</td>
          </tr>
          <tr>
            <th className="bg-secondary text-white">場所</th>
            <td>{location.name}</td>
          </tr>
          <tr>
            <th className="bg-secondary text-white">登録日時</th>
            <td>{formatDateTime(registered)}</td>
          </tr>
          <tr>
            <th className="bg-secondary text-white">更新日時</th>
            <td>{formatDateTime(updated)}</td>
          </tr>
          <tr>
            <th className="bg-secondary text-white">備考</th>
            <td>
              <pre className="note">{note}</pre>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to="/item" className="btn btn-primary me-2">
          備品リストに戻る
        </Link>
        <Link to={`/item/edit/${id}`} className="btn btn-warning me-2">
          編集
        </Link>
        <button onClick={() => setShowModal(true)} className="btn btn-danger">
          削除
        </button>
      </div>

      {/* 削除確認モーダル */}
      <ItemDeleteModal modalState={{ showModal, setShowModal }} itemId={id} />
      <FlashMessage />
    </>
  );
}
