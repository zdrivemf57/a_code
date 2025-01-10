import { useQuery } from "@tanstack/react-query";
import { getVocabTypes } from "../api/vocabApi";

/**
 * 単語の種類を選択するためのプルダウンメニュー
 * このコンポーネント内で直接的にステートを管理するのではなく、
 * 親コンポーネントからProps経由で渡されたステートとその更新関数を利用する
 */
export default function VocabTypeSelection({
  typeId,
  setTypeId,
  showAll,
  additionalClassName
}) {
  // 種類一覧の取得
  const { data: types, isLoading } = useQuery({
    queryKey: ["vocabTypes"],
    queryFn: getVocabTypes
  });

  return (
    <select
      className={additionalClassName}
      value={typeId}
      onChange={(e) => setTypeId(Number(e.target.value))}
    >
      {showAll ? <option value={0}>全て</option> : ""}
      {isLoading ? (
        <option>-</option>
      ) : (
        types.map((type) => (
          <option key={type.id} value={type.id}>
            {type.name}
          </option>
        ))
      )}
    </select>
  );
}
