import React from "react";
import { Navigationbar } from "../Home/Navigationbar";
import { Restaurant } from "../Home/Restaurant";
import { Main } from "../Home/Slider";
import styled from "styled-components";
import Footer from "../LandingPage/Footer/footer";

const Hr = styled.hr`
  width: 140vh;
  margin-left: auto;
  margin-right: auto;
`;

const Wraper1 = styled.div`
// border: 2px solid black;
height: 80px;
width: 140vh;
margin-top: 1%;
margin-left: auto;
margin-right: auto;
display: flex;
flex-direction: row;

.left-div {
    display: flex;
    flex-direction: row;
    // border: 2px solid black;
    width: 35vh;
    align-items: center;
    font-size: small;
    color: black;
}
//   .right-div {
    //     width: 113vh;
    //     padding: 1% 0%;
    //     display: flex;
    //     flex-direction: row;
    //     align-items: center;
    //     justify-content: flex-end;
    // }
}
`;
const Mains = styled(Main)`
  background-color: #005062;
`;
const Container = styled.div`
  // background-color: red;
  // border: 2px solid black;
  width: 130vh;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;

  div {
    width: 50%;
    // border: 2px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    img {
      height: 20vh;
      width: 38vh;
      margin-left: 26vh;
    }
  }
  .para1 {
    font-size: 5vh;
    font-weight: 600;
  }
  .para2 {
    font-size: 2vh;
    font-weight: 500;
    color: white;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5%;

  &:hover {
    color: orange;
    cursor: pointer;
  }
`;

export const Offers = () => {
  return (
    <>
      <Navigationbar />
      <Mains>
        <Container>
          <div>
            <p className="para1"> Offers for you</p>
            <p className="para2">
              Explore top deals and offers exclusively for you!
            </p>
          </div>
          <div>
            <img
              src="	https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/KHu24Gqw_md3ham"
              alt=""
            />
          </div>
        </Container>
      </Mains>
      <Wraper1>
        <span className="left-div">
          <Box>
            <h3>Restaurant Offers</h3>
          </Box>
        </span>
        {/* <span className="left-div">
          <Box>
            <h1>Payment offers/Coupons</h1>
          </Box>
        </span> */}
      </Wraper1>
      <Restaurant />
      <Footer />
    </>
  );
};
