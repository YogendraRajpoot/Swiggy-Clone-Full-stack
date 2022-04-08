import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../AuthContext";
import { Restaurant } from "./Restaurant";

const Container = styled.div``;
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
    width: 26vh;
    align-items: center;
    font-size: small;
    color: black;
  }
  .right-div {
    // border: 2px solid black;
    width: 113vh;
    // background-color: bisque;
    padding: 1% 0%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
}
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

export const Middle = () => {
  // const { setSortM } = useContext(AuthContext);
  // const sortJsonA = (e) => {
  //   setSortM(e);
  // };
  const sortJsonA=[]

  return (
    <>
      <Wraper1>
        <div className="left-div">
          <Box>
            <h1>2009 restaurants</h1>
          </Box>
        </div>
        <div className="right-div">
          <Box className="Link2" onClick={()=>sortJsonA()}>
            Relevance
          </Box>
          <Box className="Link2" onClick={()=>sortJsonA("c")}>
            Delivery Time
          </Box>
          <Box className="Link2" onClick={()=>sortJsonA("e")}>
            Rating
          </Box>
          <Box className="Link2" onClick={()=>sortJsonA("e")}>
            Cost: Low To High
          </Box>
          <Box className="Link2" onClick={()=>sortJsonA("e")}>
            Cost: High To Low
          </Box>
          <Box className="Link2" onClick={()=>sortJsonA("e")}>
            Filters
          </Box>
        </div>
      </Wraper1>
      <Hr />
      <Restaurant />
    </>
  );
};
