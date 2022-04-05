import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { Blank } from "./Blank";
import { LandingPage } from "./LandingPage";
import { Offers } from "./Offers/Offers";


export const Routers = () => {
  return (
    <div>
      <Routes >
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/blank" element={<Blank/>} />
        <Route path="/offers" element={<Offers/>} />
      </Routes>
    </div>
  );
};
