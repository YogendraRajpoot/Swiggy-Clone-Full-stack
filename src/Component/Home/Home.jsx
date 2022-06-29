import React from "react";
import Footer from "../LandingPage/Footer/footer";
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
