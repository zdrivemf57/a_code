import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getVocabs, getVocabsByType } from "../api/vocabApi";
import VocabTypeSelection from "./VocabTypeSelection";
import VocabTableRow from "./VocabTableRow";

/**
 * 単語一覧を表示するためのテーブル
 */
export default function VocabTable() {
  // 絞り込み用に単語の種類を管理するステート
  const [typeId, setTypeId] = useState(0);

  // React Query による単語データの取得
  const { data: vocabs, isLoading } = useQuery({
    queryKey: ["vocabs", { typeId }],
    queryFn: () => {
      if (typeId === 0) {
        return getVocabs();
      } else {
        return getVocabsByType(typeId);
      }
    }
  });

  // 単語一覧の表示
  return (
    <>
      <div className="mt-4 mb-3">
        絞り込み:
        <VocabTypeSelection
          typeId={typeId}
          setTypeId={setTypeId}
          showAll={true}
          additionalClassName="ms-2"
        />
      </div>

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>単語</th>
            <th>意味</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={3}>Loading...</td>
            </tr>
          ) : (
            vocabs.map((vocab) => (
              <VocabTableRow key={vocab.id} vocab={vocab} />
            ))
          )}
        </tbody>
      </table>
    </>
  );
}
