import LoginForm from "../components/LoginForm";
import useGetLoginUser from "../hooks/useGetLoginUser";
import useLogout from "../hooks/useLogout";

export default function LoginPage() {
  const loginUser = useGetLoginUser();
  const logout = useLogout();
  return (
    <div>
      <h1>ホーム</h1>
      {loginUser ? (
        <div>
          <p>[ {loginUser?.userName}さん ] でログイン中</p>
          <p>
            <button className="btn btn-secondary" onClick={() => logout()}>
              ログアウトする
            </button>
          </p>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}
