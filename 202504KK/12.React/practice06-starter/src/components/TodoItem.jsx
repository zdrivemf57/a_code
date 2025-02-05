import { useState } from "react";
import { useDeleteTodo } from "../hooks/useDeleteTodo";
import { useUpdateTodo } from "../hooks/useUpdateTodo";

export default function TodoItem({ item }) {
  const { id, text, isComplete } = item;

  // Todo を更新・削除するための関数を取得
  const updateItem = useUpdateTodo();
  const deleteItem = useDeleteTodo();

  // 編集モード
  const [editMode, setEditMode] = useState(false);

  // 編集モード切替処理
  const handleChangeMode = () => {
    setEditMode(!editMode);
  };

  // 内容変更処理
  const handleChangeText = (e) => {
    const newText = e.target.value;
    updateItem({ id, isComplete, text: newText });
  };

  // 削除ボタン押下時の処理
  const handleDelete = () => {
    deleteItem(id);
  };

  // ステータス変更処理
  const handleChangeStatus = () => {
    updateItem({ id, text, isComplete: !isComplete });
  };

  return (
    <tr className="align-middle">
      <td onDoubleClick={handleChangeMode}>
        {editMode ? (
          <input type="text" defaultValue={text} onChange={handleChangeText} />
        ) : (
          text
        )}
      </td>

      <td>
        <input
          id={`check-${id}`}
          type="checkbox"
          defaultChecked={isComplete}
          className="me-2"
          onChange={handleChangeStatus}
        />
        <label htmlFor={`check-${id}`}>{isComplete ? "完了" : "未完了"}</label>
      </td>
      <td>
        <button className="btn btn-danger" onClick={handleDelete}>
          削除
        </button>
      </td>
    </tr>
  );
}
