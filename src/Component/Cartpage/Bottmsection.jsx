import React from "react";
import styled from "styled-components";
import { Cartsection } from "./Cartsection";
import { Loginsection } from "./Loginsection";

const Wrapper = styled.div`
  width: 140vh;
  margin-left: auto;
  margin-right: auto;
  background-color: green;
  display: flex;
  flex-direction: row;
`;

export const Bottmsection = () => {
  return (
    <Wrapper>
      <Loginsection />
      <Cartsection />
    </Wrapper>
  );
};
