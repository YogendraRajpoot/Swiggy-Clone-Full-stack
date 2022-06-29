import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { Blank } from "./Blank";
import { Offers } from "./Offers/Offers";
import { Help } from "./Help/Help";
import { Cartpage } from "./Cartpage/Cartpage";
import { Restaurantdetail } from "./Home/Restaurantdetail";
import { Login } from "./Home/Login";
import { Signup } from "./Home/Signup";
import LandingPage from "./LandingPage/LandingPage";

export const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blank" element={<Blank />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/help" element={<Help />} />
        <Route path="/cartpage" element={<Cartpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home/:username" element={<Restaurantdetail />} />
        Restaurantdetail
      </Routes>
    </div>
  );
};
