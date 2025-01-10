import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { addVocab } from "../api/vocabApi";
import VocabTypeSelection from "./VocabTypeSelection";

/**
 * 単語登録フォーム
 */
export default function VocabRegistration() {
  // ステート
  const [showWarning, setShowWarning] = useState(false);
  const [typeId, setTypeId] = useState(1);

  // Ref
  const wordRef = useRef();
  const meaningRef = useRef();
  const typeRef = useRef();

  // React Query
  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: (newVocab) => addVocab(newVocab),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["vocabs"] })
  });

  // イベントハンドラ
  const handleSubmit = async (e) => {
    // 送信を防ぐ
    e.preventDefault();

    // 入力値の取得(種類はステートから取得)
    const word = wordRef.current.value;
    const meaning = meaningRef.current.value;

    // バリデーション(未入力チェック)
    if (word.trim() === "" || meaning.trim() === "") {
      setShowWarning(true);
      return;
    }

    // データの追加
    const vocabType = { id: typeId };
    addMutation.mutate({ word, meaning, vocabType });

    // フォームの初期化
    setShowWarning(false);
    wordRef.current.value = "";
    meaningRef.current.value = "";
    setTypeId(1);
  };

  // ビュー
  return (
    <div className="my-3">
      {showWarning ? (
        <div className="alert alert-warning">入力に不備があります</div>
      ) : (
        ""
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="d-inline-block me-3">
            単語:
            <input className="ms-2" type="text" ref={wordRef} />
          </label>
          <label className="d-inline-block me-3">
            種類:
            <VocabTypeSelection
              typeId={typeId}
              setTypeId={setTypeId}
              additionalClassName="ms-2"
              typeRef={typeRef}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="d-flex me-3">
            <span>意味:</span>
            <textarea className="ms-2" cols={100} ref={meaningRef} />
          </label>
        </div>
        <input className="btn btn-success" type="submit" value="登録" />
      </form>
    </div>
  );
}
