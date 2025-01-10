import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import VocabHome from "./components/VocabHome";
import VocabDetails from "./components/VocabDetails";
import Vocabs from "./pages/Vocabs";

export default function App() {
  return (
    <div className="container">
      <h1 className="my-4">練習06</h1>
      <hr />
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/vocabs">
            Vocabs
          </NavLink>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/vocabs" element={<Vocabs />}>
          <Route index element={<VocabHome />} />
          <Route path="details/:id" element={<VocabDetails />} />
        </Route>
      </Routes>
    </div>
  );
}
