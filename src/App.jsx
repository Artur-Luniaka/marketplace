import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const CartPage = lazy(() => import("./pages/CartPage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const ProductsDetailPage = lazy(() => import("./pages/ProductDetailsPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="catalog/:productId" element={<ProductsDetailPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
