import { useEffect, useRef, useState } from "react";
import { deleteVocab, getVocabById, updateVocab } from "../api/vocabApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import VocabTypeSelection from "./VocabTypeSelection";

/**
 * 単語の詳細表示
 * URL末尾のパラメータから単語IDを取得し、それに該当する単語を取得
 * 単語の編集、削除機能を備えている
 */
export default function VocabDetails() {
  // ステート
  const [editMode, setEditMode] = useState(false);
  const [typeId, setTypeId] = useState(0);
  const [showWarning, setShowWarning] = useState(false);

  // Ref
  const wordRef = useRef();
  const meaningRef = useRef();

  // URL末尾のパラメータ
  const { id } = useParams();

  // リダイレクト用
  const navigate = useNavigate();

  // React Query
  const queryClient = useQueryClient();

  const { data: vocab, isLoading } = useQuery({
    queryKey: ["vocabs", { id }],
    queryFn: () => getVocabById(id)
  });

  const updateMutation = useMutation({
    mutationFn: (updatedVocab) => updateVocab(updatedVocab),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["vocabs"] })
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteVocab(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vocabs"] });
      navigate("/vocabs", { replace: true });
    }
  });

  // イベントハンドラ
  const handleClickCancel = (e) => {
    setEditMode(false);
    setShowWarning(false);
  };

  const handleClickUpdate = (e) => {
    const word = wordRef.current.value;
    const meaning = meaningRef.current.value;

    // バリデーション(未入力チェック)
    if (word.trim() === "" || meaning.trim() === "") {
      setShowWarning(true);
      return;
    }

    // データの追加
    const vocabType = { id: typeId };
    updateMutation.mutate({ id, word, meaning, vocabType });

    setEditMode(false);
  };

  const handleClickDelete = (e) => {
    deleteMutation.mutate();
  };

  // 単語情報が取得されたあとに、種類をセット
  useEffect(() => {
    if (vocab) {
      setTypeId(vocab.vocabType.id);
    }
  }, [vocab]);

  // ビューの作成
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {showWarning ? (
        <div className="alert alert-warning">入力に不備があります</div>
      ) : (
        ""
      )}

      <table className="table table-bordered">
        <tbody>
          <tr>
            <th className="bg-dark text-white">単語</th>
            <td>
              {!editMode ? (
                vocab.word
              ) : (
                <input defaultValue={vocab.word} ref={wordRef} />
              )}
            </td>
          </tr>
          <tr>
            <th className="bg-dark text-white">意味</th>
            <td>
              {!editMode ? (
                vocab.meaning
              ) : (
                <textarea
                  cols={80}
                  defaultValue={vocab.meaning}
                  ref={meaningRef}
                />
              )}
            </td>
          </tr>
          <tr>
            <th className="bg-dark text-white">種類</th>
            <td>
              {!editMode ? (
                vocab.vocabType.name
              ) : (
                <VocabTypeSelection typeId={typeId} setTypeId={setTypeId} />
              )}
            </td>
          </tr>
          <tr>
            <th className="bg-dark text-white">登録日時</th>
            <td>{vocab.registeredAt}</td>
          </tr>
          <tr>
            <th className="bg-dark text-white">更新日時</th>
            <td>{vocab.updatedAt}</td>
          </tr>
        </tbody>
      </table>
      <div className="my-3">
        {!editMode ? (
          <>
            <Link to="/vocabs" className="btn btn-secondary me-2">
              一覧に戻る
            </Link>
            <button
              className="btn btn-warning"
              onClick={(e) => setEditMode(true)}
            >
              編集
            </button>
          </>
        ) : (
          <>
            <button
              className="btn btn-secondary me-2"
              onClick={handleClickCancel}
            >
              キャンセル
            </button>
            <button
              className="btn btn-warning me-2"
              onClick={handleClickUpdate}
            >
              変更を確定
            </button>
            <button className="btn btn-danger" onClick={handleClickDelete}>
              削除
            </button>
          </>
        )}
      </div>
    </div>
  );
}
