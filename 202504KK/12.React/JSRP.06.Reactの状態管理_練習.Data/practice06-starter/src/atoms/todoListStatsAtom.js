import { atom } from "jotai";
import { todoListAtom } from "./todoListAtom";

export const todoListStatsAtom = atom((get) => {
  const todoList = get(todoListAtom);
  const totalNum = todoList.length;
  const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
  const percentCompleted =
    totalNum === 0 ? 100 : (totalCompletedNum / totalNum) * 100;
  return { totalNum, totalCompletedNum, percentCompleted };
  
});
