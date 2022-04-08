import React, { useContext, useEffect } from "react";
import DoneIcon from "@mui/icons-material/Done";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AuthContext } from "../AuthContext";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  //   border: 2px solid black;
  width: 70%;
  //   height: auto;
`;
const Box = styled.div`
  //   border: 1px solid ;
  // box-shadow: -2px 10px 15px 5px #888888;
  // width: 100%;
  // height: 25vh;
  // padding:2%;
  //   background-color: yellow;
  // margin-top: 2%;

  box-shadow: -2px 10px 15px 5px #888888;
  width: 95%;
  padding: 2%;
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
  display: flex;
  flex-dorection: row;
  align-items: center;
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
  .Link {
    text-decoration: none;
  }
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
  .Link {
    text-decoration: none;
    color: black;
  }
`;
const Round = styled.div`
  border: 2px solid green;
  width: 3vh;
  height: 3vh;
  background-color: green;
  margin-left: 4%;
  border-radius: 50%;
  svg {
    color: white;
    color: black;
  }
`;

export const Loginsection = () => {
  const { login } = useContext(AuthContext);
  const { isAuth } = useContext(AuthContext);
  // const detail = useSelector((state) => state.detail);
  // console.log("Yogi", todo);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   fetch(`http://localhost:3001/persondetail`)
  //     .then((res) => res.json())
  //     .then((res) => dispatch(detail(res)));
  // }, []);
  useEffect(() => {
    if (localStorage.getItem("Token") !== null) {
      console.log(localStorage.getItem("Token"));
      login(localStorage.getItem("Token"));
    }
  }, []);

  if (!isAuth) {
    return (
      <Wrapper>
        <Box>
          <Section1>Account</Section1>
          <Section2>Place your order now</Section2>
          <Section3>
            <Button1>
              <Link className="Link" to="/signup">
                SIGN UP
              </Link>
            </Button1>
            <Button2>
              <Link className="Link" to="/login">
                LOG IN
              </Link>
            </Button2>
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
  }
  return (
    <Wrapper>
      <Box>
        <Section1></Section1>
        <Section2>
          <h1>Logged In</h1>
          <Round>
            <DoneIcon />{" "}
          </Round>
        </Section2>
        <Section3>
          <h2>Yogendra Rajpoot | 8081878913</h2>
        </Section3>
      </Box>
      <Box>
        <Section1>Delivery address</Section1>
        <Section3>
          <h3>712/923 1-B4 Civil Lines, Prayagraj ,Allahabad</h3>
        </Section3>
      </Box>
      <Box>
        <Section1>Choose payment method</Section1>
      </Box>
      {/* <Box></Box> */}
    </Wrapper>
  );
};
