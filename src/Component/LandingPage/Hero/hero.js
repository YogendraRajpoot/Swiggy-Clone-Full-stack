import React, { useEffect, useState } from "react";
import "./hero.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Logo from "../assets/Swiggy_logo.png";
import Button from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoginDrawer from "../Drawer/LoginDrawer";
import RegisterDrawer from "../Drawer/RegisterDrawer";
import { Link } from "react-router-dom";
import { cities } from "../../../data";

const Hero = () => {
  //   console.log(cities);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState([]);
  useEffect(() => {
    if (search === "") {
    } else {
      setCity(
        cities.filter((e) => {
          if (e.toLocaleLowerCase().includes(search)) {
            return e;
          }
        })
      );
    }

    //   return () => {

    //   }
  }, [search]);

  //   console.log("32", city);

  return (
    <div className="herosection">
      <div className="hero-subsec">
        <div className="hsec1">
          <img className="logo" src={Logo} alt="swiggylogo" />
          <div className="button-sect">
            {/* <Button classes={'login-btn'} name={'Login'} /> */}
            <LoginDrawer />
            {/* <Button classes={'sign-up-btn'} name={'Sign up'} /> */}
            <RegisterDrawer />
          </div>
        </div>
        <div className="hsec2">
          <h1 className="heading-hsec2">
            <span className="animation-heading"></span>
          </h1>
          <p className="dull-text">
            Order food from favourite restaurants near you.
          </p>
        </div>
        <div className="hsec3">
          <div className="input-container">
            <div className="inputPlocate">
              <input
                className="input-box"
                type="text"
                placeholder="Enter your delivery location"
                onChange={(e) => setSearch(e.target.value)}
              />
              {/* <div className="locate-btn">
                            <FontAwesomeIcon icon="crosshairs"/>
                            <span> &nbsp;Locate Me</span>
                        </div> */}
            </div>
            <Link to="/home">
              <Button classes={"find-food-btn"} name={"Find Food"} />
            </Link>
          </div>
          <div className="input-city-suggestion">
            {city.map((item) => {
              console.log("74", item);
              return (
                <p>
                  <LocationOnIcon />
                  {item}
                </p>
              );
            })}
          </div>
        </div>
        <div className="hsec4">
          <h3 className="hsec4-h3">POPULAR CITIES IN INDIA</h3>
          <ul className="list-para">
            <li className="list-content-hsec4">
              <a className="list-item-hsec4" href="#city">
                Ahmedabad
              </a>
            </li>
            <li className="list-content-hsec4">
              <a className="list-item-hsec4" href="#city">
                Bangalore
              </a>
            </li>
            <li className="list-content-hsec4">
              <a className="list-item-hsec4" href="#city">
                Chennai
              </a>
            </li>
            <li className="list-content-hsec4">
              <a className="list-item-hsec4" href="#city">
                Delhi
              </a>
            </li>
            <li className="list-content-hsec4">
              <a className="list-item-hsec4" href="#city">
                Gurgaon
              </a>
            </li>
            <li className="list-content-hsec4">
              <a className="list-item-hsec4" href="#city">
                Hyderabad
              </a>
            </li>
            <li className="list-content-hsec4">
              <a className="list-item-hsec4" href="#city">
                Kolkata
              </a>
            </li>
            <li className="list-content-hsec4">
              <a className="list-item-hsec4" href="#city">
                Mumbai
              </a>
            </li>
            <li className="list-content-hsec4">
              <a className="list-item-hsec4" href="#city">
                Pune
              </a>
            </li>
            <li className="list-content-hsec4">
              <a className="list-item-hsec4" href="#city">
                & more
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Hero;
