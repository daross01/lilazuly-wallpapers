import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@/components/layout/Layout";

import Home from "@/pages/Home/Home";
import Category from "@/pages/Category/Category";
import Subcategory from "@/pages/Subcategory/Subcategory";
import Product from "@/pages/Product/Product";
import About from "@/pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Home */}
          <Route index element={<Home />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Categoría */}
          <Route path="/:category" element={<Category />} />

          {/* Subcategoría */}
          <Route
            path="/:category/:subcategory"
            element={<Subcategory />}
          />

          {/* Colección */}
          <Route
            path="/:category/:subcategory/:post"
            element={<Product />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;