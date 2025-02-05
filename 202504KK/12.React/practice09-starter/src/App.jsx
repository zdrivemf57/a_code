import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import LoginPage from "./pages/LoginPage";
import ItemListPage from "./pages/ItemListPage";
import ItemRegistrationPage from "./pages/ItemRegistrationPage";
import LoginUserOnlyPages from "./pages/LoginUserOnlyPages";

export default function App() {
  return (
    <>
      <NavigationBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/items" element={<LoginUserOnlyPages />}>
            <Route index element={<ItemListPage />} />
            <Route path="register" element={<ItemRegistrationPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
