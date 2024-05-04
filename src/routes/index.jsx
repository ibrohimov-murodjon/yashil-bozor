import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "./login/Login";
import Register from "./register/Register";
import MarketPlace from "../pages/market-place/MarketPlace";
import Hashar from "../pages/hashar/Hashar";
import Admin from "./admin/Admin";
import ManageProducts from "./manage-products/ManageProducts";
import Sellers from "./sellers/Sellers";
import ManageHashar from "./manage-hashars/ManageHashar";

const RouteController = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="market-place" element={<MarketPlace />} />
      <Route path="hashar" element={<Hashar />} />
      <Route path="admin" element={<Admin />}>
        <Route path="" element={<ManageProducts />} />
        <Route path="sellers" element={<Sellers />} />
        <Route path="manage-hashar" element={<ManageHashar />} />
      </Route>
    </Routes>
  );
};

export default RouteController;
