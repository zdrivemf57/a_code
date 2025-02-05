import { useAtom } from "jotai";
import { filterStatusAtom } from "../atoms/filterStatusAtom";
import { useResetAtom } from "jotai/utils";

export default function TodoFilter() {
  const [filter, setFilter] = useAtom(filterStatusAtom);
  const resetFilter = useResetAtom(filterStatusAtom);

  const changeFilter = (e) => {
    setFilter(e.target.value);
  };
  
  return (
    <div className="mb-3">
      <label className="me-2" htmlFor="filter">
        フィルタリング条件:
      </label>
      <select value={filter} onChange={changeFilter} id="filter">
        <option value="all">すべて</option>
        <option value="completed">完了</option>
        <option value="uncompleted">未完了</option>
      </select>
      <button className="btn btn-secondary ms-2" onClick={resetFilter}>
        条件をリセット
      </button>
    </div>
  );
}
