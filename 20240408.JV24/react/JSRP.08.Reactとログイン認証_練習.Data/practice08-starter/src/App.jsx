import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import LoginPage from "./pages/LoginPage";
import ItemListPage from "./pages/ItemListPage";
import ItemRegisterPage from "./pages/ItemRegisterPage";
import { useEffect } from "react";

export default function App () {
  // ブラウザを閉じる際に、ローカルストレージをクリアする
  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.clear();
    };

    window.addEventListener("beforeunload", clearLocalStorage);

    return () => {
      window.removeEventListener("beforeunload", clearLocalStorage);
    };
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/items">
            <Route index element={<ItemListPage />} />
            <Route path="add" element={<ItemRegisterPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}
