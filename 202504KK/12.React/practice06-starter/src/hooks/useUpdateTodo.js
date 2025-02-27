import { useSetAtom } from "jotai";
import { todoListAtom } from "../atoms/todoListAtom";

export function useUpdateTodo() {
  const setTodoList = useSetAtom(todoListAtom);
  
  /**
   * todoListAtom を更新する関数
   * 引数: 新しい Todo
   */
  const updateTodoList = (newTodo) => {
    setTodoList((todoList) =>
      [...todoList].map((todo) => {
        if (todo.id === newTodo.id) {
          // 元の Todo と新しい Todo の ID が一致
          // ⇒ 新しい Todo を配列に加える
          return newTodo;
        } else {
          // 元の Todo と新しい Todo の ID が不一致
          // ⇒ 元の Todo を配列に加える
          return todo;
        }
      })
    );
  };
  return updateTodoList;
  // ↑ useUpdateTodoフック関数は、updateTodoList関数を返している
  // 呼ばれた時は、updateTodoList関数を実行はしない
}
