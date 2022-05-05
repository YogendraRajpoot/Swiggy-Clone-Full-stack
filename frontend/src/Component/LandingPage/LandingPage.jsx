import React from "react";
import Hero from "./Hero/hero";
import Features from "./Features/features";
import Restaurant from "./Restaurants/restaurants";
import Footer from "./Footer/footer";
import './Hero/fontawesome'

const LandingPage = () =>  {
    return (
        <div>
            {/* <h3>This is landing page</h3> */}
            <Hero />
            <Features />
            <Restaurant />
            <Footer />
        </div>
    )
};

export default LandingPage;