import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import EditProduct from "./pages/EditProduct";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:prod_id" element={<EditProduct />}></Route>
        <Route path="/" element={<LoginPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
