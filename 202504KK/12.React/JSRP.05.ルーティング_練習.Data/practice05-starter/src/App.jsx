import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import ItemsIndex from "./pages/items/Index";

export default function App() {
  return (
    <div>
      <h1 className="mt-3 text-center">練習05</h1>
      <hr />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/items">
          <Route index element={<ItemsIndex />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
