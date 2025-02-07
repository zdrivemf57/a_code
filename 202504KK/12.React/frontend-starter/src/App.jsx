import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ItemListPage from "./pages/item/ItemListPage";
import ItemDetailPage from "./pages/item/ItemDetailPage";
import ItemRegisterPage from "./pages/item/ItemRegisterPage";
import ItemEditPage from "./pages/item/ItemEditPage";
import MemberDetailPage from "./pages/member/MemberDetailPage";
import MemberEditPage from "./pages/member/MemberEditPage";
import PageNotFound from "./pages/PageNotFound";
import AuthMemberOnly from "./components/common/AuthMemberOnly";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route element={<AuthMemberOnly />}>
        <Route path="/item">
          <Route index element={<ItemListPage />} />
          <Route path="detail/:id" element={<ItemDetailPage />} />
          <Route path="register" element={<ItemRegisterPage />} />
          <Route path="edit/:id" element={<ItemEditPage />} />
        </Route>
        <Route path="/member">
          <Route index element={<MemberDetailPage />} />
          <Route path="edit" element={<MemberEditPage />} />
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
