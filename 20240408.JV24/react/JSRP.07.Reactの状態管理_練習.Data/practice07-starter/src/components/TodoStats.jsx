import { useAtomValue } from "jotai";
import { todoListStatsAtom } from "../atoms/todoListStatsAtom";

export default function TodoStats() {
  const { totalNum, totalCompletedNum, percentCompleted } =
                                            useAtomValue(todoListStatsAtom);

  return (
    <>
      <h2>現在の進捗</h2>
      <ul>
        <li>タスク数: {totalNum}</li>
        <li>完了タスク数: {totalCompletedNum}</li>
        <li>達成率: {percentCompleted.toFixed(1)}%</li>
      </ul>
    </>
  );
}
