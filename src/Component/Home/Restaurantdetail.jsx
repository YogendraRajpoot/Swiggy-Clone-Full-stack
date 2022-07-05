import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  addamount,
  additem,
  decCount,
  incCount,
  subamount,
} from "../../Redux/Action/action";
import Footer from "../LandingPage/Footer/footer";
import "./Location.css";
import { Navigationbar } from "./Navigationbar";

export const Restaurantdetail = () => {
  const hotelname = useSelector((state) => state.hotelname);
  const itemss = useSelector((state) => state.itemss);
  const amount = useSelector((state) => state.amount);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();
  const { username } = useParams();
  const [user, setUser] = useState([]);
  const [userdetail, setUserdetail] = useState([]);
  const count = useSelector((state) => state.count);

  // console.log("23", username);

  const url = `https://fake-json-swiggy-api.herokuapp.com/restaurant/${username}`;

  useEffect(() => {
    getRestaurantDetail();
  }, []);

  function getRestaurantDetail() {
    setIsLoading(true);
    return fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
        setUserdetail(res.items);
        // console.log("31", res);
        // console.log("32", username);
      })
      .catch((err) => setIsError(true))
      .finally(() => setIsLoading(false));
  }

  // let count = 0;
  // user.items.map((i) =>i?count++);
  // console.log(count);

  // console.log("user 39", user);
  // console.log("userdetail 40", userdetail, Object.keys(userdetail).length);
  // console.log("userdetail 45", userdetail);
  // console.log("hotelname 41", hotelname);
  return (
    <div className="location">
      <Navigationbar />
      <div className="banner">
        <div className="_3t">
          <div className="Line1">
            <div className="Row1">
              <img
                className="imgswiggy"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/schjsfazzjcaaywwuap7"
              />
            </div>
          </div>
          <div className="Line2">
            <div className="Lines1">
              <div>
                <h1>{user.name}</h1>
              </div>
            </div>
            <div className="Lines2">
              <div>
                <div className="left">South Indian</div>
                {/* <br/><br /> */}
                <div className="left">Road No 10, Banjara Hills</div>
                <br />
                <div className="Ratings">
                  <div>
                    <div>
                      <span className="icon">{user.rating}</span>
                    </div>
                    <div>
                      <span className="icons">1000+ ratings</span>
                    </div>
                  </div>
                  <div className="rateline"></div>
                  <div>
                    <div>
                      <span>{user.average_time} Mins</span>
                    </div>
                    <div>Delivery Time</div>
                  </div>
                  <div className="rateline"></div>
                  <div>
                    <div>
                      <span>₹ {user.average_cost}</span>
                    </div>
                    <div>Cost for two</div>
                  </div>
                </div>
              </div>

              {/* <br /> */}
            </div>
          </div>
          <div className="Line3">
            <div>
              <div className="Offer">OFFER</div>
              <div className="Offers">
                <div className="Offersered">
                  <span className="imgoffer">
                    <img
                      src="https://static.thenounproject.com/png/347508-200.png"
                      className="imgoffer"
                    />
                  </span>
                  <div>
                    20% off up to ₹100 on orders above ₹400 + Up to ₹100
                    cashback with Paytm | Use code JUMBO
                  </div>
                </div>
                <div className="Offersered">
                  <span className="imgoffer">
                    <img
                      src="https://static.thenounproject.com/png/347508-200.png"
                      className="imgoffer"
                    />
                  </span>
                  <div>
                    50% off up to ₹100 + Flat ₹30 cashback with Paytm | Use code
                    WELCOME50
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLoading ? (
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
        <div className="banner2">
          <div className="recommended">
            <section className="section1">
              <div>
                <div className="everage">
                  <div className="beverage">
                    <h2>All Items</h2>
                    {userdetail.map((i) => {
                      return <p>{i.name}</p>;
                    })}
                  </div>
                </div>
                <div className="_1Lx"></div>
              </div>
            </section>
            <section className="section2">
              <div className="sec21">
                <h2 className="secrec">Recommended</h2>
                <div className="item">
                  {Object.keys(userdetail).length} items
                </div>
                {userdetail.map((i) => {
                  return (
                    <div className="items" key={i.id}>
                      <div className="items1">
                        <div className="items2">
                          <div className="items3">
                            <p></p>
                            <div className="items4">
                              <div className="items5">
                                <i></i>
                                <img
                                  src="data:image/jpeg;base64,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"
                                  className="imgcircle"
                                />
                                <img
                                  src="https://st2.depositphotos.com/8511412/11363/v/450/depositphotos_113638426-stock-illustration-star-star-icon-star-icon.jpg"
                                  className="starorange"
                                />
                                <span className="best">Bestseller</span>
                              </div>
                              <div className="items51">
                                <h3>{i.name}</h3>
                              </div>
                              <div>
                                <span className="servess">
                                  <span>₹{i.price}</span>
                                </span>
                              </div>
                              <div className="serves">
                                |serves 1 | |Serves with Chutney,Sambar |
                                {/* /serves 1 / / serves with {i.name} */}
                              </div>
                            </div>
                            <div className="items41">
                              <div className="idlistyle">
                                <img className="idlistyle1" src={i.img_url} />
                              </div>
                              <div className="addbutton">
                                <button
                                  className="btnadd"
                                  onClick={() => {
                                    if (count > 0) {
                                      dispatch(decCount(1));
                                      dispatch(subamount(Number(i.price)));
                                    }
                                  }}
                                >
                                  -
                                </button>
                                <button className="btnadd">Add</button>
                                <button
                                  className="btnadd"
                                  onClick={() => {
                                    dispatch(incCount(1));
                                    dispatch(additem(i.name));
                                    dispatch(addamount(Number(i.price)));
                                  }}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
            {count > 0 ? (
              <section className="section3">
                <div className="cart1">
                  <div className="cart21">
                    Cart
                    <div className="cart3">{count}</div>
                  </div>
                  <div className="cart22">
                    {/* <div className="sub"></div> */}
                    <div className="subcart1">
                      <div className="subcart2">
                        {/* <div className="subcart31"></div> */}
                        <div className="subcart32">
                          {/* <div className="subcart4"></div> */}
                          <div>
                            <div className="welcome">
                              WELCOME50 Eligible items
                            </div>
                            {/* <div className="saved">
                          You just
                          <span className="saves">saved ₹100</span>
                          on these items!
                        </div> */}
                            <p>
                              <img
                                src="https://st2.depositphotos.com/8511412/11363/v/450/depositphotos_113638426-stock-illustration-star-star-icon-star-icon.jpg"
                                className="starorange"
                              />
                              {itemss}
                              {/* {console.log(itemss)} */}
                              {/* {itemss.map((i1) => (
                            <h3 >{i1}</h3>
                          ))} */}
                            </p>
                            <div className="btn">
                              <button
                                onClick={() => {
                                  dispatch(decCount(1));
                                }}
                              >
                                -
                              </button>
                              <div>{count}</div>
                              <button onClick={() => dispatch(incCount(1))}>
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="subcart33">
                          <p className="total">Subtotal : {amount}</p>
                          <p className="total_1">Extra charges may apply</p>
                        </div>
                      </div>
                    </div>
                    {/* <div className="subtotal"></div> */}
                  </div>
                  <Link to="/cartpage" className="cart23">
                    CHECKOUT
                  </Link>
                </div>
              </section>
            ) : (
              <section className="section3"></section>
            )}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};
