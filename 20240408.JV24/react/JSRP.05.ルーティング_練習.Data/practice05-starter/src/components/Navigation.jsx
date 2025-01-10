import { NavLink } from "react-router-dom";

export default function Navigation () {
  return (
    <div className="container">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            ホーム
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            会社概要
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/items" className="nav-link">
            商品情報
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
