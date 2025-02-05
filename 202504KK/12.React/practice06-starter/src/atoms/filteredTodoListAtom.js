import { atom } from "jotai";
import { filterStatusAtom } from "./filterStatusAtom";
import { todoListAtom } from "./todoListAtom";

export const filteredTodoListAtom = atom((get) => {
  const filter = get(filterStatusAtom);
  const list = get(todoListAtom);
  
  switch (filter) {
    case "completed":
      return list.filter((item) => item.isComplete);
    case "uncompleted":
      return list.filter((item) => !item.isComplete);
    default:
      return list;
  }
});
