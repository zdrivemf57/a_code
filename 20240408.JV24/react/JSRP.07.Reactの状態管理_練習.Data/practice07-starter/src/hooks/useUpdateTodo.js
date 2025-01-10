import { useSetAtom } from "jotai";
import { todoListAtom } from "../atoms/todoListAtom";

export function useUpdateTodo() {
  const setTodoList = useSetAtom(todoListAtom);
  return ({ id, text, isComplete }) =>
    setTodoList((todoList) =>
      [...todoList].map((todo) => {
        if (todo.id === id) {
          return { id, text, isComplete };
        } else {
          return todo;
        }
      })
    );
}
