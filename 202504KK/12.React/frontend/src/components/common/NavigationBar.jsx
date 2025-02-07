import { NavLink } from "react-router-dom";
import { FaUserCircle, FaUserEdit } from "react-icons/fa";
import { BiSolidUserDetail } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import useLogout from "../../hooks/auth/useLogout";
import useLoginMember from "../../hooks/auth/useLoginMember";

export default function NavigationBar() {
  const loginMember = useLoginMember();
  const logout = useLogout();

  return (
    <Navbar expand="lg" className="navbar-dark bg-dark">
      <Container>
        <Navbar.Brand>備品管理システム</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/item" end className="nav-link">
              備品リスト
            </NavLink>
            <NavLink to="/item/register" className="nav-link">
              備品の登録
            </NavLink>
          </Nav>
          <Nav>
            <NavDropdown
              title={
                <>
                  <FaUserCircle size={20} /> {loginMember?.memberName}さん
                </>
              }
              id="basic-nav-dropdown"
            >
              <NavLink to="/member" end className="dropdown-item">
                <BiSolidUserDetail size={24} /> 会員情報の表示
              </NavLink>
              <NavLink to="/member/edit" className="dropdown-item">
                <FaUserEdit size={20} /> 会員情報の編集
              </NavLink>
              <NavDropdown.Divider />
              <button
                onClick={() => logout("ログアウトしました")}
                className="dropdown-item"
              >
                <BiLogOut size={22} /> ログアウト
              </button>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
