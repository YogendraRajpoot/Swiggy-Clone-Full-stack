import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Navigationbar } from "../Home/Navigationbar";
import { Bottmsection } from "./Bottmsection";

export const Cartpage = () => {
  

  return (
    <div>

      <Navigationbar />
      <Bottmsection />
    </div>
  );
};
