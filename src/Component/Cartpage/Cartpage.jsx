import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Navigationbar } from "../Home/Navigationbar";
import Footer from "../LandingPage/Footer/footer";
import { Bottmsection } from "./Bottmsection";

export const Cartpage = () => {
  

  return (
    <div>
      <Navigationbar />
      <Bottmsection />
      <Footer />
    </div>
  );
};
