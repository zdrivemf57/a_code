import { useSetAtom } from "jotai";
import { todoListAtom } from "../atoms/todoListAtom";

export function useDeleteTodo() {
  const setTodoList = useSetAtom(todoListAtom);

  /**
   * Todo を削除する関数
   * ⇒ todoListAtom が保持する Todo を減らして(絞り込んで)、更新する
   * 引数: 削除する Todo の ID
   */
  const deleteTodo = (id) => {
    // 削除対象の ID に該当しない Todo で絞り込む
    setTodoList((todoList) => [...todoList].filter((todo) => todo.id !== id));
  };
  
  return deleteTodo;
}
