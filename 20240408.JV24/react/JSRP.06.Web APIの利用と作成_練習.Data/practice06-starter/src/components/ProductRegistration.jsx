import { useRef, useState } from "react";
import { addProduct } from "../api/mockdbApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

/**
 * 製品データの追加フォーム
 */
export default function ProductRegistation() {
  // ステート
  const [showWarning, setShowWarning] = useState(false);

  // Ref
  const nameRef = useRef();
  const makerRef = useRef();
  const priceRef = useRef();

  // Tanstack Queryによるデータの追加
  const queryClient = useQueryClient();
  const addMutation = useMutation({
    mutationFn: (newProduct) => addProduct(newProduct),
    onSuccess: () => queryClient.invalidateQueries({queryKey: ["products"]})
  });

  const handleSubmit = (e) => {
    // 送信をさせない
    e.preventDefault();

    // フォーム入力値の取得
    const name = nameRef.current.value;
    const maker = makerRef.current.value;
    const price = Number(priceRef.current.value);

    // バリデーション(未入力チェック)
    if (name.trim() === "" || maker.trim() === "") {
      setShowWarning(true);
      return;
    }

    // データの追加
    addMutation.mutate({ name, maker, price });

    // フォームの初期化
    setShowWarning(false);
    nameRef.current.value = "";
    makerRef.current.value = "";
    priceRef.current.value = 0;
  };

  return (
    <div className="my-3">
      {showWarning ? (
        <div className="alert alert-warning">入力に不備があります</div>
      ) : (
        ""
      )}
      <form onSubmit={handleSubmit}>
        <label className="d-inline-block me-3">
          製品名:
          <input className="ms-2" type="text" ref={nameRef} />
        </label>
        <label className="d-inline-block me-3">
          メーカー:
          <input className="ms-2" type="text" ref={makerRef} />
        </label>
        <label className="d-inline-block me-3">
          価格:
          <input
            className="mx-2"
            type="number"
            defaultValue={0}
            min={0}
            max={9999999}
            step={1}
            ref={priceRef}
          />
          円
        </label>
        <input className="btn btn-success" type="submit" value="登録" />
      </form>
    </div>
  );
}
