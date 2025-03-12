import { useRef, useState } from "react";
import { addProduct } from "../helpers/productsApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

/**
 * 製品データの追加フォーム
 */
export default function ProductRegistationForm() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (product) => addProduct(product),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["products"] })
  });

  // エラーメッセージのステート
  const [isError, setIsError] = useState(false);

  // フォーム連携
  const nameRef = useRef();
  const makerRef = useRef();
  const priceRef = useRef();

  // 送信ボタン押下時
  const handleSubmit = async (e) => {
    e.preventDefault();

    // フォーム入力値の取得
    const name = nameRef.current.value;
    const maker = makerRef.current.value;
    const price = Number(priceRef.current.value);

    // バリデーション(未入力チェック)
    if (name.trim() === "" || maker.trim() === "") {
      setIsError(true);
      return;
    }

    /*try, catch, finally を削除*/
    // データの追加
    // ↓ mutationはエラー時もリターンで返してくれるのでtry/catchは不要になる
    await mutation.mutateAsync({ name, maker, price });
    // フォームの初期化
    setIsError(false);
    nameRef.current.value = "";
    makerRef.current.value = "";
    priceRef.current.value = 0;
  };

  return (
    <div className="my-3">
      {isError && (
        <div className="alert alert-danger">入力に不備があります</div>
      )}

      {/* エラーがあったかどうかはisErrorで判断できる */}
      {mutation.isError && (
        <div className="alert alert-danger">データの登録に失敗しました</div>
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
        <input
          disabled={mutation.isPending}
          className="btn btn-success"
          type="submit"
          value="登録"
        />
      </form>
    </div>
  );
}
