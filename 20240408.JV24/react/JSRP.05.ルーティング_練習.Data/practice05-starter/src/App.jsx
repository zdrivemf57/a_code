import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import ItemsIndex from "./pages/items/Index";
import Navigation from "./components/Navigation";
import Details from "./pages/items/Details";
import ItemsLayout from "./layouts/ItemsLayout";

export default function App () {
  return (
    <div>
      <h1 className="mt-3 text-center">練習05</h1>
      <Navigation />
      <hr />
      <div className="container">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/items" element={<ItemsLayout />}>
            <Route index element={<ItemsIndex />} />
            <Route path=":id" element={<Details />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <footer className="text-center bg-dark text-white py-4 fixed-bottom">
        <p>
          <small>&copy; Example Inc. All Rights Reserved.</small>
        </p>
      </footer>
    </div>
  );
}
