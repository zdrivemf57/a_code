import { useSetAtom } from "jotai";
import { todoListAtom } from "../atoms/todoListAtom";

export function useDeleteTodo() {
  const setTodoList = useSetAtom(todoListAtom);
  return (itemId) =>
    setTodoList((todoList) =>
      [...todoList].filter((todo) => todo.id !== itemId)
    );
}
