import { useRef, useState } from "react";
import { addProduct, getProducts } from "../helpers/productsApi";
/**
 * 製品データの追加フォーム
 */
export default function ProductRegistationForm( {setProducts} ) {
  // エラーメッセージのステート
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // 追加処理中のステート
  const [isPending, setIsPending] = useState(false);

  // フォーム連携
  const nameRef = useRef();
  const makerRef = useRef();
  const priceRef = useRef();

  // ② リダイレクトの為のフック
  // const navigate = useNavigate();

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
      setErrorMessage("入力に不備があります");
      return;
    }
    // データの追加
    try {
      setIsPending(true);
      await addProduct({ name, maker, price });
      // ① 最新のデータを取得して state を更新
      const newData = await getProducts(); // ← 追加
      setProducts(newData);                // ← 追加
      // ② リダイレクト
      // navigate("/", { replace: true });

      // フォームの初期化
      setIsError(false);
      nameRef.current.value = "";
      makerRef.current.value = "";
      priceRef.current.value = 0;
    } catch (error) {
      console.log(error);
      setIsError(true);
      setErrorMessage("データの登録に失敗しました");
    } finally {
      setIsPending(false);
    }
  };
  return (
    <div className="my-3">
      {isError && <div className="alert alert-danger">{errorMessage}</div>}
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
          disabled={isPending}
          className="btn btn-success"
          type="submit"
          value="登録"
        />
      </form>
    </div>
  );
}
