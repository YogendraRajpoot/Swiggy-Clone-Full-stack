import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  //   border: 2px solid black;
  width: 70%;
  //   height: auto;
`;
const Box = styled.div`
  //   border: 1px solid ;
  box-shadow: -2px 10px 15px 5px #888888;
  width: 100%;
  height: 25vh;
  //   background-color: yellow;
  margin-top: 2%;
`;
const Section1 = styled.div`
  //   border: 2px solid black;
  //   width: 100%;
  //   height: 20vh;
  //   background-color: red;
  margin-top: 4%;
  margin-left: 4%;
  font-size: 3.5vh;
  font-weight: 600;
`;
const Section2 = styled.div`
  //   border: 2px solid black;
  //   width: 100%;
  //   height: 20vh;
  //   background-color: red;
  margin-top: 2%;
  margin-left: 4%;
  font-size: 2vh;
  //   font-weight:600;
`;
const Section3 = styled.div`
  //   border: 2px solid black;
  //   width: 100%;
  //   height: 20vh;
  //   background-color: red;
  margin-top: 4%;
  margin-left: 4%;
  //   font-size:2vh;
  //   font-weight:600;
`;

const Button1 = styled.button`
  border: 2px solid green;
  width: 15vh;
  height: 5vh;
  //   margin-top: 4%;
  //   margin-Left: 4%;
  //   font-size:2vh;
  //   font-weight:600;
`;
const Button2 = styled.button`
  border: 2px solid green;
  width: 15vh;
  height: 5vh;
  background-color: green;
  //   margin-top: 4%;
  margin-left: 4%;
  //   font-size:2vh;
  //   font-weight:600;
`;

export const Loginsection = () => {
  return (
    <Wrapper>
      <Box>
        <Section1>Account</Section1>
        <Section2>Place your order now</Section2>
        <Section3>
          <Button1>SIGN UP</Button1>
          <Button2>LOG IN</Button2>
        </Section3>
      </Box>
      <Box>
        <Section1>Delivery address</Section1>
      </Box>
      <Box>
        <Section1>Choose payment method</Section1>
      </Box>
      {/* <Box></Box> */}
    </Wrapper>
  );
};
