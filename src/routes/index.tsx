import { BrowserRouter, Route, Routes } from "react-router-dom"

import {
  CartPage,
  HomePage,
  SingleProductPage,
  NotFoundPage,
  AllProductsPage,
} from "pages"

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/products" element={<AllProductsPage />} />
      <Route path="/products/:productId" element={<SingleProductPage />} />
    </Routes>
  </BrowserRouter>
)
