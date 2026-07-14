import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@/components/layout/Layout";

import Home from "@/pages/Home/Home";
import Wallpapers from "@/pages/Wallpapers/Wallpapers";
import Product from "@/pages/Product/Product";
import About from "@/pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/wallpapers" element={<Wallpapers />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;