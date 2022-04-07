import SupportIcon from "@mui/icons-material/Support";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";

const Container = styled.div`
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;
`;

const Wraper = styled.div`
  // border: 2px solid black;
  height: 100%;
  width: 140vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;

  .left-div {
    display: flex;
    flex-direction: row;
    // border: 2px solid black;
    width: 62vh;
    align-items: center;
    font-size: small;
    color: black;
  }
  .right-div {
    // border: 2px solid black;
    width: 77vh;
    // background-color: bisque;
    padding: 2%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
const SVG = styled.svg`
  stroke: currentColor;
  fill: #fc8019;
  height: 60px;
  // width=500px;
  stroke-width: 0;
  &:hover {
    transform: scale(1.15);
    transition: 0.5s;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10%;
  color: grey;
  .Link1 {
    font-weight: 1000;
  }

  .Link2 {
    color: grey;
    text-decoration: none;
    // font-weight: 0;
    width: 26vh;
  }
  &:hover .Link1,
  &:hover {
    color: orange;
    cursor: pointer;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  margin-left: 10%;
  color: grey;
  &:hover {
    color: orange;
    cursor: pointer;
  }
  // .Link1 {
  // color: grey;
  //   font-weight: 1000;
  // }

  .Link2 {
    color: grey;
    text-decoration: none;
    font-weight: 0;
  }
  // &:hover .Link1,
  // &:hover {
  //   color: orange;
  //   cursor: pointer;
  // }
`;

const SmallBox = styled.div`
  border: 2px solid black;
  width: 15px;
`;
const Image = styled.img`
  height: 90%;
`;

export const Navigationbar = () => {
  return (
    <Container>
      <Wraper>
        <div className="left-div">
          <Box>
            <StyledLink to="/home" type="button">
              <SVG viewBox="0 0 16 25" fill="#fc8019">
                <path
                  d="M15.5397581,11.1409928 C15.6509608,10.509712 15.5235868,10.0243137 15.1951696,9.77089093 C14.7011461,9.38969453 13.9591625,9.18240372 12.1918981,9.18240372 C10.8843181,9.18240372 9.48050894,9.18382005 8.88067307,9.18351656 C8.824972,9.17259055 8.62352934,9.10693329 8.6159428,8.86342483 L8.60775734,4.99753828 C8.60755774,4.75352397 8.80231214,4.55503473 9.04308494,4.55452889 C9.28425707,4.55412423 9.47990987,4.75190531 9.4801096,4.99571727 C9.4801096,4.99571727 9.48609894,7.09432117 9.48669787,7.84012275 C9.48669787,7.91215351 9.52822427,8.08029271 9.69013694,8.12409793 C10.745764,8.40908477 16.0819961,8.20068119 15.9990433,7.22017265 C15.5462467,3.15296419 12.1495732,0 8.02559027,0 C6.72689454,0 5.497376,0.313010053 4.40860776,0.868112227 C1.80303074,2.22496121 -0.0474859557,4.9636474 0.000928137643,8.12703176 C0.0352672176,10.3690901 1.49467783,14.3542524 2.38809268,14.9457747 C2.7998621,15.2186215 3.34210002,15.1176569 5.7669976,15.1176569 C6.86664654,15.1176569 7.89062974,15.1212989 8.39383694,15.1236259 C8.44614414,15.1335401 8.72045734,15.1971741 8.72045734,15.4525191 L8.726846,18.391212 C8.72744507,18.6353275 8.53249094,18.8337155 8.2913188,18.8338167 C8.050546,18.8342213 7.85499294,18.6366427 7.85459374,18.3927295 C7.85459374,18.3927295 7.8760556,17.2135293 7.8760556,16.7737573 C7.8760556,16.6719836 7.88334267,16.4971673 7.59006307,16.3649424 C6.6241768,15.929824 3.48764179,16.1924529 3.31165404,16.6725905 C3.24427359,16.8573211 3.5949514,17.5713563 4.13479358,18.4869157 C5.93330254,21.3601537 7.6990696,23.6004924 7.98456307,23.9589263 C8.00223174,23.9744048 8.0192016,23.9886693 8.03437467,24 C8.26985694,23.7099548 14.5488164,16.7550415 15.5397581,11.1409928 Z"
                  id="Swiggy_Filled"
                ></path>
              </SVG>
            </StyledLink>
          </Box>
          <Box>
            <StyledLink className="Link1" to="/blank">
              Other{" "}
            </StyledLink>
            <Link className="Link2" to="/blank">
              &nbsp;&nbsp;Prayagraj, Uttar Pradesh, India
            </Link>
          </Box>
        </div>
        <div className="right-div">
          <StyledLink to="/blank">
            <SearchIcon />
            Search
          </StyledLink>
          <StyledLink to="/offers">
            <Image
              src="data:image/png;base64,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"
              alt=""
            />
            Offers
          </StyledLink>
          <StyledLink to="/help">
            <SupportIcon />
            Help
          </StyledLink>
          <StyledLink to="/login">
            <PersonOutlineSharpIcon />
            Sign In
          </StyledLink>
          <StyledLink to="/cartpage">
            <SmallBox>2</SmallBox>
            Cart
          </StyledLink>
        </div>
      </Wraper>
    </Container>
  );
};
