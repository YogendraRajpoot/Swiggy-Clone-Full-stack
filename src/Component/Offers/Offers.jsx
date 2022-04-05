import React from "react";
import { Navigationbar } from "../Home/Navigationbar";
import { Restaurant } from "../Home/Restaurant";
import { Main } from "../Home/Slider";
import styled from "styled-components";

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
    //     // border: 2px solid black;
    //     width: 113vh;
    //     // background-color: bisque;
    //     padding: 1% 0%;
    //     display: flex;
    //     flex-direction: row;
    //     align-items: center;
    //     justify-content: flex-end;
    // }
}
`;
const Container = styled.div`
s

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
      <Main>
        <>
          <h1>Offers for You</h1>
          <h3>Explore top deals and offers exclusively for you!</h3>
        </>
      </Main>
      <Wraper1>
        <span className="left-div">
          <Box>
            <h1>Restaurant Offers</h1>
          </Box>
        </span>
        <span className="left-div">
          <Box>
            <h1>Payment offers/Coupons</h1>
          </Box>
        </span>
      </Wraper1>
      <Restaurant />
    </>
  );
};
