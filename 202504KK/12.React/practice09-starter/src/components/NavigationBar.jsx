import { NavLink } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useGetLoginUser from "../hooks/useGetLoginUser";

export default function NavigationBar() {
  const logout = useLogout();
  const loginUser = useGetLoginUser();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="bg-dark text-white mb-3">
      <nav className="container d-flex justify-content-between pt-3">
        <ul className="list-unstyled d-flex">
          <li>
            <NavLink to="/" className="px-3 nav-link">
              ホーム
            </NavLink>
          </li>
          <li>
            <NavLink to="/items" className="px-3 nav-link" end>
              商品リスト
            </NavLink>
          </li>
          <li>
            <NavLink to="/items/register" className="px-3 nav-link">
              商品登録
            </NavLink>
          </li>
        </ul>
        {loginUser && (
          <ul className="list-unstyled">
            <li>
              ［ {loginUser?.userName}さん ］
              <button onClick={handleLogout}>ログアウト</button>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}
