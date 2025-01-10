import { useRef } from "react";
import useLogin from "../hooks/useLogin";

export default function LoginForm () {
  const { login, isPending, isError } = useLogin();
  const loginIdRef = useRef();
  const loginPassRef = useRef();

  const submitData = async (e) => {
    e.preventDefault();
    const loginId = loginIdRef.current.value;
    const loginPass = loginPassRef.current.value;
    await login(loginId, loginPass);
  };

  return (
    <form onSubmit={submitData}>
      {isError && (
        <div className="alert alert-danger">ログインに失敗しました</div>
      )}
      <div className="mb-3">
        ログインID:
        <input type="text" className="ms-3" ref={loginIdRef} />
      </div>
      <div className="mb-3">
        パスワード:
        <input type="password" className="ms-3" ref={loginPassRef} />
      </div>
      <input
        type="submit"
        className="btn btn-primary"
        disabled={isPending}
        value="ログイン"
      />
    </form>
  );
}
