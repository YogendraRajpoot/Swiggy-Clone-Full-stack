import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { Blank } from "./Blank";
import { LandingPage } from "./LandingPage";
import { Offers } from "./Offers/Offers";
import { Help } from "./Help/Help";
import { Cartpage } from "./Cartpage/Cartpage";
import { Restaurantdetail } from "./Home/Restaurantdetail";


export const Routers = () => {
  return (
    <div>
      <Routes >
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/blank" element={<Blank/>} />
        <Route path="/offers" element={<Offers/>} />
        <Route path="/help" element={<Help/>} />
        <Route path="/cartpage" element={<Cartpage/>} />
        <Route path="/home/:username" element={<Restaurantdetail/>} />
      
        Restaurantdetail
      </Routes>
    </div>
  );
};
