import { useRef } from "react";
import useRegisterItem from "../hooks/useRegisterItem";
import { Navigate } from "react-router-dom";

export default function ItemRegister () {
  const { registerItem, isError, isPending, isSuccess } = useRegisterItem();
  const nameRef = useRef();
  const priceRef = useRef();

  const submitData = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    registerItem({ name, price });
  };

if (isSuccess) {
    return <Navigate to={"/items"} />;
  }

  return (
    <form onSubmit={submitData}>
      {isError && <div className="alert alert-danger">登録に失敗しました</div>}
      <div className="mb-3">
        商品名:
        <input type="text" className="ms-3" ref={nameRef} />
      </div>
      <div className="mb-3">
        値段:
        <input
          type="number"
          className="ms-3"
          defaultValue={0}
          min={0}
          ref={priceRef}
        />
      </div>
      <input
        type="submit"
        className="btn btn-primary"
        disabled={isPending}
        value="登録"
      />
    </form>
  );
}
