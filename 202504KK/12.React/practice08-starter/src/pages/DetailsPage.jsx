import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getVocabById } from "../api/vocabApi";
import VocabDetailsTable from "../components/VocabDetailsTable";
import VocabEditForm from "../components/VocabEditForm";
/**
 * 詳細ページ 編集モードによって表示と編集を切り換える
 * URL パラメータ(単語 ID)を元に単語情報を取得する
 */
export default function DetailsPage() {
  const { id } = useParams();
  const vocabId = Number(id);

  // ↓ 詳細ボタンをクリックされたら最初は編集モードはfalse
  const [isEditMode, setIsEditMode] = useState(false);

  // vocabIdをキーにVocabを1件取得
  // クエリキーは ["vocab", 単語 ID(数値)] にする
  const {
    data: vocab,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ["vocab", vocabId],
    queryFn: () => getVocabById(vocabId)
  });

  if (isError) {
    return (
      <>
        <div className="alert alert-danger">{error.message}</div>
        <Link to="/" className="btn btn-secondary me-2">
          一覧に戻る
        </Link>
      </>
    );
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }
  
  return (
    <>
      {isEditMode ? (
        <VocabEditForm vocab={vocab} setIsEditMode={setIsEditMode} />
      ) : (
        <VocabDetailsTable vocab={vocab} setIsEditMode={setIsEditMode} />
      )}
    </>
  );
}
