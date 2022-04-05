import React from "react";
import { Footer } from "./Footer";
import { Middle } from "./Middle";
import { Navigationbar } from "./Navigationbar";
import { Slider } from "./Slider";

export const Home = () => {
  return (
    <div>
      <Navigationbar />
      <Slider />
      <Middle />
      <Footer />
    </div>
  );
};
