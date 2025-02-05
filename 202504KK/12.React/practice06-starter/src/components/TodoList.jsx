import { useAtomValue } from "jotai";
import TodoItem from "./TodoItem";
import { filteredTodoListAtom } from "../atoms/filteredTodoListAtom";

export default function TodoList() {
  const todoList = useAtomValue(filteredTodoListAtom);

  if (todoList.length < 1) {
    return <div className="alert alert-primary">表示するTodoはありません</div>;
  }

  return (
    <table className="table table-striped border">
      <thead className="table-dark">
        <tr>
          <th>内容</th>
          <th>ステータス</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </tbody>
    </table>
  );
}
