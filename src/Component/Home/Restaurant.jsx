import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { addhotelname } from "../../Redux/Action/action";

const Wraper2 = styled.div`
  //   border: 2px solid black;
  height: auto;
  width: 140vh;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const Card = styled(Link)`
  text-decoration: none;
  color: black;
  //   border: 2px solid black;
  height: 45vh;
  // margin-top: 5%;
  // box-shadow: 5px 10px 8px 10px #888888;
  .hr2 {
    opacity: 0;
  }
  &:hover {
    color: black;
    cursor: pointer;
    // border: 2px solid grey;
    box-shadow: -2px 10px 15px 5px #888888;
  }
  &:hover .para5 {
    opacity: 1;
    color: #5d8ed5;
    margin-top: 3%;
    margin-left: 30%;
  }
  &:hover .hr2 {
    opacity: 1;
  }
`;
const SmallCard = styled.div`
  //   border: 2px solid black;
  height: 75%;
  width: 92%;
  margin-top: 4%;
  margin-left: auto;
  margin-right: auto;
`;
const SmallerCard1 = styled.div`
  //   border: 2px solid black;
  background: red;
  height: 45%;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
`;
const SmallerCard2 = styled.div`
  // border: 2px solid black;
  // background: yellow;
  height: 55%;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
`;
const Image = styled.img`
  // border: 2px solid black;
  background: yellow;
  height: 100%;
  width: 100%;
`;

const Div1 = styled.div`
  // border: 2px solid black;
  height: 20%;
  width: 100%;
  align-items: baseline;
  // background:blue;
  .h2 {
    margin-top: 3%;
    margin-left: 10%;
  }
`;
const Div2 = styled.div`
  // border: 1px solid black;
  height: 20%;
  width: 100%;
  margin: 10px;
  margin-left: 0px;
  font-size: smaller;
  // background: green;
  p {
    word-spacing: 0.5vw;
  }
`;
const Div3 = styled.div`
  // border: 1px solid black;
  height: 20%;
  width: 100%;
  margin: 10px;
  margin-left: 0px;
  display: flex;
  flex-direction: row;
  // background: brown;
  .para3 {
    font-size: small;
    margin-top: 2%;
    margin-left: 4%;
  }
  .div1 {
    background: green;
    height: 60%;
    width: 20%;
    display: flex;
    flex-direction: row;
    color: white;
    align-items: center;
  }
`;
const Div4 = styled.div`
  // top:50%;
  // padding:5% 0% 0% 0%;
  // border: 1px solid black;
  height: 20%;
  font-weight: 500;
  width: 100%;
  color: #8a584b;
  font-size: small;
  display: flex;
  flex-direction: row;
  // background: white;
  .para4 {
    margin-top: 3%;
    margin-left: 3%;
  }
`;
const Image2 = styled.img`
  // border: 2px solid black;
  background: yellow;
  height: 50%;
  width: 5%;
  margin-top: 3%;
`;
const Div5 = styled.div`
  // border: 1px solid black;
  height: 20%;
  width: 100%;
  // background: red;
  .para5 {
    opacity: 0;
    margin-top: 1%;
    margin-left: 30%;
    // color: blue;
    font-weight: 600;
  }
`;

export const Restaurant = () => {
  const hotelname = useSelector((state) => state.hotelname);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);
  const { sortM } = useContext(AuthContext);
  // console.log(sortM);
  // if (sortM === "a") {
  //   fetch(`http://localhost:3001/restaurant?_sort=average_time&_order=desc`)
  //   .then((r) => r.json())
  //   .then((r) => {
  //     setData(r);
  //     console.log(r);
  //   });
  // }
  // else if (sortM === "b") {
  //   fetch(`http://localhost:3001/restaurant?_sort=average_time&_order=asc`)
  //   .then((r) => r.json())
  //   .then((r) => {
  //     setData(r);
  //     console.log(r);
  //   });
  // } else if (sortM === "c") {
  //   fetch(`http://localhost:3001/restaurant?_sort=rating&_order=desc`)
  //   .then((r) => r.json())
  //   .then((r) => {
  //     setData(r);
  //     console.log(r);
  //   });
  // } else if (sortM === "d") {
  //   fetch(`http://localhost:3001/restaurant?_sort=average_cost&_order=asc`)
  //   .then((r) => r.json())
  //   .then((r) => {
  //     setData(r);
  //     console.log(r);
  //   });
  // } else if (sortM === "e") {
  //   fetch(`http://localhost:3001/restaurant?_sort=average_cost&_order=desc`)
  //   .then((r) => r.json())
  //   .then((r) => {
  //     setData(r);
  //     console.log(r);
  //   });
  // }

  // const sortJsonD = (e) => {
  //   console.log("A", e);
  // fetch(`http://localhost:3001/restaurant?_sort=${A}&_order=${B}`)
  //   .then((r) => r.json())
  //   .then((r) => {
  //     setData(r);
  //     console.log(r);
  //   });
  // };

  // const filterByCategory = (e) => {
  // fetch(`http://localhost:3001/restaurant`)
  //   .then((r) => r.json())
  //   .then((r) => {
  //     setData(r);
  //     console.log(r);
  //   });
  // };

  useEffect(() => {
    getRestaurant();
  }, []);

  function getRestaurant() {
    setIsLoading(true);
    return fetch("https://fake-json-swiggy-api.herokuapp.com/restaurant")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setData(res);
      })
      .catch((err) => setIsError(true))
      .finally(() => setIsLoading(false));
  }
  return isLoading ? (
    <div style={{ width: "100%" }}>
      <img
        src="https://cdn.dribbble.com/users/436306/screenshots/6026974/foodline.gif"
        style={{ marginLeft: "15%", width: "70%", height: "40vw" }}
      />
      {/* <img
        style={{ marginLeft:"35%" }}
        src="	https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
      />
      <img src="https://freefrontend.com/assets/img/css-loaders/loading.gif" style={{marginLeft:"35%"}}/> */}
    </div>
  ) : isError ? (
    <div>Something went wrong</div>
  ) : (
    <Wraper2>
      {data.map((item) => {
        return (
          <Card
            key={item.id}
            to={`/home/${item.id}`}
            onClick={() => {
              dispatch(addhotelname(item.name));
              // console.log(hotelname);
            }}
          >
            <SmallCard>
              <SmallerCard1>
                <Image src={item.img_url} alt="" />
              </SmallerCard1>
              <SmallerCard2>
                <Div1>
                  <h5>{item.name}</h5>
                </Div1>
                <Div2>
                  <p>{item.cuisines.map((C) => C)}</p>
                </Div2>
                <Div3>
                  <div className="para3 div1">
                    <StarRateIcon />
                    {item.rating}
                  </div>
                  <div className="para3">{item.average_time} MINS</div>
                  <div className="para3">{item.average_cost} FOR TWO</div>
                </Div3>
                <hr />
                <Div4>
                  <Image2
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <p className="para4">60% off | Use TRYNEW </p>
                </Div4>
                <hr className="hr2" />
                <Div5>
                  <p className="para5">Quick View </p>
                </Div5>
              </SmallerCard2>
            </SmallCard>
          </Card>
        );
      })}
    </Wraper2>
  );

  // return (
  //   <Wraper2>
  //     <Card>
  //       <SmallCard>
  //         <SmallerCard1>
  //           <Image
  //             src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kcbwb9mioboimbnk5f52"
  //             alt=""
  //           />
  //         </SmallerCard1>
  //         <SmallerCard2>
  //           <Div1>
  //             <h3 className="h3">Burger King</h3>
  //           </Div1>
  //           <Div2>
  //             <p>
  //               Biryani, Mughlai, Kebabs, North Indian, Hyderabadi, Lucknowi,
  //               Andhra, South Indi...
  //             </p>
  //           </Div2>
  //           <Div3>
  //             <div className="para3 div1">
  //               <StarRateIcon /> 4.2
  //             </div>
  //             <div className="para3">57 MINS</div>
  //             <div className="para3">600 FOR TWO</div>
  //           </Div3>
  //           <hr />
  //           <Div4>
  //             <Image2
  //               src="data:image/png;base64,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"
  //               alt=""
  //             />
  //             <p className="para4">60% off | Use TRYNEW </p>
  //           </Div4>
  //           <hr className="hr2" />
  //           <Div5>
  //             <p className="para5">Quick View </p>
  //           </Div5>
  //         </SmallerCard2>
  //       </SmallCard>
  //     </Card>
  //     <Card>
  //       <SmallCard>
  //         <SmallerCard1>
  //           <Image
  //             src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kcbwb9mioboimbnk5f52"
  //             alt=""
  //           />
  //         </SmallerCard1>
  //         <SmallerCard2>
  //           <Div1>
  //             <h3 className="h3">Burger King</h3>
  //           </Div1>
  //           <Div2>
  //             <p>
  //               Biryani, Mughlai, Kebabs, North Indian, Hyderabadi, Lucknowi,
  //               Andhra, South Indi...
  //             </p>
  //           </Div2>
  //           <Div3>
  //             <div className="para3 div1">
  //               <StarRateIcon /> 4.2
  //             </div>
  //             <div className="para3">57 MINS</div>
  //             <div className="para3">600 FOR TWO</div>
  //           </Div3>
  //           <hr />
  //           <Div4>
  //             <Image2
  //               src="data:image/png;base64,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"
  //               alt=""
  //             />
  //             <p className="para4">60% off | Use TRYNEW </p>
  //           </Div4>
  //           <hr className="hr2" />
  //           <Div5>
  //             <p className="para5">Quick View </p>
  //           </Div5>
  //         </SmallerCard2>
  //       </SmallCard>
  //     </Card>
  //     <Card>
  //       <SmallCard>
  //         <SmallerCard1>
  //           <Image
  //             src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kcbwb9mioboimbnk5f52"
  //             alt=""
  //           />
  //         </SmallerCard1>
  //         <SmallerCard2>
  //           <Div1>
  //             <h3 className="h3">Burger King</h3>
  //           </Div1>
  //           <Div2>
  //             <p>
  //               Biryani, Mughlai, Kebabs, North Indian, Hyderabadi, Lucknowi,
  //               Andhra, South Indi...
  //             </p>
  //           </Div2>
  //           <Div3>
  //             <div className="para3 div1">
  //               <StarRateIcon /> 4.2
  //             </div>
  //             <div className="para3">57 MINS</div>
  //             <div className="para3">600 FOR TWO</div>
  //           </Div3>
  //           <hr />
  //           <Div4>
  //             <Image2
  //               src="data:image/png;base64,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"
  //               alt=""
  //             />
  //             <p className="para4">60% off | Use TRYNEW </p>
  //           </Div4>
  //           <hr className="hr2" />
  //           <Div5>
  //             <p className="para5">Quick View </p>
  //           </Div5>
  //         </SmallerCard2>
  //       </SmallCard>
  //     </Card>
  //     <Card>
  //       <SmallCard>
  //         <SmallerCard1>
  //           <Image
  //             src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kcbwb9mioboimbnk5f52"
  //             alt=""
  //           />
  //         </SmallerCard1>
  //         <SmallerCard2>
  //           <Div1>
  //             <h3 className="h3">Burger King</h3>
  //           </Div1>
  //           <Div2>
  //             <p>
  //               Biryani, Mughlai, Kebabs, North Indian, Hyderabadi, Lucknowi,
  //               Andhra, South Indi...
  //             </p>
  //           </Div2>
  //           <Div3>
  //             <div className="para3 div1">
  //               <StarRateIcon /> 4.2
  //             </div>
  //             <div className="para3">57 MINS</div>
  //             <div className="para3">600 FOR TWO</div>
  //           </Div3>
  //           <hr />
  //           <Div4>
  //             <Image2
  //               src="data:image/png;base64,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"
  //               alt=""
  //             />
  //             <p className="para4">60% off | Use TRYNEW </p>
  //           </Div4>
  //           <hr className="hr2" />
  //           <Div5>
  //             <p className="para5">Quick View </p>
  //           </Div5>
  //         </SmallerCard2>
  //       </SmallCard>
  //     </Card>
  //     <Card>
  //       <SmallCard>
  //         <SmallerCard1>
  //           <Image
  //             src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kcbwb9mioboimbnk5f52"
  //             alt=""
  //           />
  //         </SmallerCard1>
  //         <SmallerCard2>
  //           <Div1>
  //             <h3 className="h3">Burger King</h3>
  //           </Div1>
  //           <Div2>
  //             <p>
  //               Biryani, Mughlai, Kebabs, North Indian, Hyderabadi, Lucknowi,
  //               Andhra, South Indi...
  //             </p>
  //           </Div2>
  //           <Div3>
  //             <div className="para3 div1">
  //               <StarRateIcon /> 4.2
  //             </div>
  //             <div className="para3">57 MINS</div>
  //             <div className="para3">600 FOR TWO</div>
  //           </Div3>
  //           <hr />
  //           <Div4>
  //             <Image2
  //               src="data:image/png;base64,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"
  //               alt=""
  //             />
  //             <p className="para4">60% off | Use TRYNEW </p>
  //           </Div4>
  //           <hr className="hr2" />
  //           <Div5>
  //             <p className="para5">Quick View </p>
  //           </Div5>
  //         </SmallerCard2>
  //       </SmallCard>
  //     </Card>
  //     <Card>
  //       <SmallCard>
  //         <SmallerCard1>
  //           <Image
  //             src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kcbwb9mioboimbnk5f52"
  //             alt=""
  //           />
  //         </SmallerCard1>
  //         <SmallerCard2>
  //           <Div1>
  //             <h3 className="h3">Burger King</h3>
  //           </Div1>
  //           <Div2>
  //             <p>
  //               Biryani, Mughlai, Kebabs, North Indian, Hyderabadi, Lucknowi,
  //               Andhra, South Indi...
  //             </p>
  //           </Div2>
  //           <Div3>
  //             <div className="para3 div1">
  //               <StarRateIcon /> 4.2
  //             </div>
  //             <div className="para3">57 MINS</div>
  //             <div className="para3">600 FOR TWO</div>
  //           </Div3>
  //           <hr />
  //           <Div4>
  //             <Image2
  //               src="data:image/png;base64,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"
  //               alt=""
  //             />
  //             <p className="para4">60% off | Use TRYNEW </p>
  //           </Div4>
  //           <hr className="hr2" />
  //           <Div5>
  //             <p className="para5">Quick View </p>
  //           </Div5>
  //         </SmallerCard2>
  //       </SmallCard>
  //     </Card>
  //     <Card>
  //       <SmallCard>
  //         <SmallerCard1>
  //           <Image
  //             src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kcbwb9mioboimbnk5f52"
  //             alt=""
  //           />
  //         </SmallerCard1>
  //         <SmallerCard2>
  //           <Div1>
  //             <h3 className="h3">Burger King</h3>
  //           </Div1>
  //           <Div2>
  //             <p>
  //               Biryani, Mughlai, Kebabs, North Indian, Hyderabadi, Lucknowi,
  //               Andhra, South Indi...
  //             </p>
  //           </Div2>
  //           <Div3>
  //             <div className="para3 div1">
  //               <StarRateIcon /> 4.2
  //             </div>
  //             <div className="para3">57 MINS</div>
  //             <div className="para3">600 FOR TWO</div>
  //           </Div3>
  //           <hr />
  //           <Div4>
  //             <Image2
  //               src="data:image/png;base64,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"
  //               alt=""
  //             />
  //             <p className="para4">60% off | Use TRYNEW </p>
  //           </Div4>
  //           <hr className="hr2" />
  //           <Div5>
  //             <p className="para5">Quick View </p>
  //           </Div5>
  //         </SmallerCard2>
  //       </SmallCard>
  //     </Card>
  //     <Card>
  //       <SmallCard>
  //         <SmallerCard1>
  //           <Image
  //             src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kcbwb9mioboimbnk5f52"
  //             alt=""
  //           />
  //         </SmallerCard1>
  //         <SmallerCard2>
  //           <Div1>
  //             <h3 className="h3">Burger King</h3>
  //           </Div1>
  //           <Div2>
  //             <p>
  //               Biryani, Mughlai, Kebabs, North Indian, Hyderabadi, Lucknowi,
  //               Andhra, South Indi...
  //             </p>
  //           </Div2>
  //           <Div3>
  //             <div className="para3 div1">
  //               <StarRateIcon /> 4.2
  //             </div>
  //             <div className="para3">57 MINS</div>
  //             <div className="para3">600 FOR TWO</div>
  //           </Div3>
  //           <hr />
  //           <Div4>
  //             <Image2
  //               src="data:image/png;base64,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"
  //               alt=""
  //             />
  //             <p className="para4">60% off | Use TRYNEW </p>
  //           </Div4>
  //           <hr className="hr2" />
  //           <Div5>
  //             <p className="para5">Quick View </p>
  //           </Div5>
  //         </SmallerCard2>
  //       </SmallCard>
  //     </Card>
  //   </Wraper2>
  // );
};
