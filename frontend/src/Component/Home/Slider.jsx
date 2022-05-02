import React, { useEffect } from "react";
import styled from "styled-components";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
export const Main = styled.div`
  // border: 2px solid black;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: 37vh;
  background-color: #171a29;
  color:white;
`;
const Container = styled.div`
  // border: 2px solid black;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
`;
const Smallbox = styled.div`
  // border: 2px solid black;
  width: 5%;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
`;
const Box = styled.div`
  // border: 2px solid black;
  width: 90%;
  // margin-left: auto;
  // margin-right: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  scroll-behavior: smooth;
`;
const Card = styled.div`
  // border: 2px solid black;
  height: 100%;
  margin-left: 2%;
`;
const Image = styled.img`
  // border: 2px solid black;
  padding: 12% 0%;
  height: 80%;
  // width: 7vh;
  &:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }
`;
const Button = styled.button`
  // border: 2px solid black;
  border-radius: 50%;
  height: 8vh;
  width: 7vh;
  margin-top: 13vh;
  background-color: white;
`;

export const Slider = () => {
  useEffect(() => {
    const productContainers = [...document.querySelectorAll(".Box")];
    const preBtn = [...document.querySelectorAll(".btn1")];
    const nxtBtn = [...document.querySelectorAll(".btn2")];

    productContainers.forEach((item, i) => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth = containerDimensions.width;
      // console.log(item, i);

      nxtBtn[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth;
      });

      preBtn[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth;
      });
    });
  }, [Button]);

  return (
    <Main className="Main">
      <Container>
        <Smallbox>
          <Button className="btn1">
            <ArrowBackOutlinedIcon fontSize="large" />
          </Button>
        </Smallbox>
        <Box className="Box">
          <Card>
            <Image
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/jkcbdbr3qdjuzgjepkjx"
              alt="promotion img"
            />
          </Card>
          <Card>
            <Image
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/xax7qfs6dbmzdmzxq1dh"
              alt="promotion img"
            />
          </Card>
          <Card>
            <Image
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/c59djn2nskqlf0ork6wc"
              alt="promotion img"
            />
          </Card>
          <Card>
            <Image
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/qd0mwkv1mk3bxyy3x5fm"
              alt="promotion img"
            />
          </Card>
          <Card>
            <Image
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/rl8zesrkte88twzgbma5"
              alt="promotion img"
            />
          </Card>
          <Card>
            <Image
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/lgxbfmjfi9ba7sqbliek"
              alt="promotion img"
            />
          </Card>
          <Card>
            <Image
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ztpd5q9awnmmnefczn5x"
              alt="promotion img"
            />{" "}
          </Card>
          <Card>
            <Image
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/jcjcvebiczqe5jr2vijo"
              alt="promotion img"
            />
          </Card>
          <Card>
            <Image
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rs4krvosxjt6i5wyefvy"
              alt="promotion img"
            />
          </Card>
          <Card>
            <Image
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/kmewp8efed0ev7yvfyx6"
              alt="promotion img"
            />
          </Card>
          <Card>
            <Image
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/marketing-dashboard/carousel/e8qsywpath9uli7tnikc"
              alt="promotion img"
            />
          </Card>
          <Card>
            <Image
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/marketing-dashboard/carousel/bmp2yqaaqouptllxmkei"
              alt="promotion img"
            />
          </Card>
        </Box>
        <Smallbox>
          <Button className="btn2">
            <ArrowForwardOutlinedIcon fontSize="large" />
          </Button>
        </Smallbox>
      </Container>
    </Main>
  );
};
