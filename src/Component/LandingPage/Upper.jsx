import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "../Home/Footer";

const Main = styled.div`
  // border: 2px solid black;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  height: 60vh;
  width: 204.5vh;
  border: 2px solid black;
  display: flex;
  flex-direction: row;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  // border: 2px solid black;
`;
const Section1 = styled.div`
  width: 120vh;
  height: 60vh;
  // border: 2px solid black;
`;
const CardMain = styled.div`
  width: 70%;
  height: 90%;
  // border: 2px solid black;
  padding-left: 30%;
  padding-top: 5%;
`;
const Card1 = styled.div`
  display: flex;
  width: 80vh;
  flex-direction: row;
  // border: 2px solid black;
  align-items: center;
  justify-content: space-around;
`;
const Card2 = styled.div`
  display: flex;
  width: 80vh;
  padding-left: 6vh;
  // border: 2px solid black;
  padding-top: 7vh;
  font-size: 3vh;
`;
const Card3 = styled.div`
  display: flex;
  width: 80vh;
  padding-left: 6vh;
  // border: 2px solid black;
  font-size: 2vh;
`;
const Styledlink1 = styled(Link)`
  color: black;
  width: 18vh;
  height: 4vh;
  text-align: center;
  font-size: 136%;
  font-weight: 700;
  text-decoration: none;
`;

const Styledlink2 = styled(Link)`
  color: white;
  background-color: black;
  width: 18vh;
  height: 4vh;
  text-align: center;
  font-size: 136%;
  font-weight: 700;
  text-decoration: none;
`;
const Logo = styled.img`
  height: 8vh;
`;
const StyledInput = styled.input`
  width: 60vh;
  height: 6vh;
`;
const Styledlink3 = styled(Link)`
  background-color: #fc8019;
  color: white;
  padding: 1vh;
  text-decoration: none;
`;

const Section2 = styled.div`
  width: 92vh;
  height: 60vh;
  border: 2px solid black;
`;
const CardContainer = styled.div`
  background-color: #2b1e16;
  display: flex;
  flex-direction: row;
`;

const Card = styled.div`
  border: none;
  background-color: #2b1e16;
  height: 39vh;
  text-align: center;
`;

const CardImg = styled.img`
  width: 128px;
  height: 206px;
`;
const CardContainerunder = styled.div`
  width: 34%;
`;

const Header = styled.header`
  overflow: hidden;
  ul {
    list-style: none;
  }
  ul > li {
    margin-bottom: 15px;
    text-align: left;
    color: white;
  }
`;

export const Upper = () => {
  return (
    <Main>
      <Wrapper>
        <Section1>
          <CardMain>
            <Card1>
              <Logo
                src="https://d2sj89osparb2a.cloudfront.net/images/media/swiggy-cashback-coupons.png"
                alt="logo"
              />
              <Styledlink1 to="/login">Login</Styledlink1>
              <Styledlink2 to="/sigunup">Signup</Styledlink2>
            </Card1>
            <Card2>
              <h1>Hungry?</h1>
            </Card2>
            <Card3>
              <p>Order food from favourite restaurants near you.</p>
            </Card3>
            <Card2>
              <StyledInput
                type="text"
                name="Location"
                placeholder="Enter Your Delivery Location"
                required
              />
              <Styledlink3 to="/home">Find Food</Styledlink3>
            </Card2>
            <Card3>
              <p>POPULAR CITIES IN INDIA</p>
            </Card3>
            <Card3>
              <p>
                Bangalore Chennai Delhi Hyderabad Mumbai Prayagraj and more.
              </p>
            </Card3>
          </CardMain>
        </Section1>
        <Section2>
          <Image src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq" />
        </Section2>
      </Wrapper>
      <CardContainer className="row justify-content-around pb-2">
        <CardContainerunder className="col-3 ml-2 mt-3 pb-5">
          <Card className="card">
            <CardImg
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"
              className="card-img-top align-self-center"
              alt="No Minimum Order"
            />
            <div className="card-body" style={{ color: "white" }}>
              <p className="card-title h4 font-weight-bold mt-2">
                No Minimum Order
              </p>
              <p className="card-text">
                Order in for yourself or for the group, with no restrictions on
                order value
              </p>
            </div>
          </Card>
        </CardContainerunder>
        <CardContainerunder className="col-3 mt-3">
          <Card className="card">
            <CardImg
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"
              className="card-img-top align-self-center"
              alt="Live Order Tracking"
            />
            <div className="card-body" style={{ color: "white" }}>
              <h5 className="card-title h4 font-weight-bold mt-2">
                Live Order Tracking
              </h5>
              <p className="card-text">
                Know where your order is at all times, from the restaurant to
                your doorstep
              </p>
            </div>
          </Card>
        </CardContainerunder>
        <CardContainerunder className="col-3 mr-2 mt-3">
          <Card className="card">
            <CardImg
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"
              className="card-img-top align-self-center"
              alt="Lightning-Fast Delivery"
            />
            <div className="card-body" style={{ color: "white" }}>
              <h5 className="card-title h4 font-weight-bold mt-2">
                Lightning-Fast Delivery
              </h5>
              <p className="card-text">
                Experience Swiggy's superfast delivery for food delivered fresh
                & on time
              </p>
            </div>
          </Card>
        </CardContainerunder>
      </CardContainer>
      <CardContainerunder>
        <div>
          <img src="https://i.ibb.co/SBs3m5B/image.jpg" alt="" />
        </div>
      </CardContainerunder>
      <CardContainerunder>
        <Footer />
      </CardContainerunder>
    </Main>
  );
};
