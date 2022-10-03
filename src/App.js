import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NotFoundBlock from "./components/NotFoundBlock";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import FullPizza from "./pages/FullPizza";
import MainLayout from "./layouts/MainLayout";

function Parent() {
  return (
    <div>
      <h1>Загаловок</h1>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFoundBlock />} />
      </Route>
    </Routes>
  );
}

export default App;
