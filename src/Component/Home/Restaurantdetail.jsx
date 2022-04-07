import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Location.css";
import { Navigationbar } from "./Navigationbar";
export const Restaurantdetail = () => {
  const [user, setUser] = useState([]);
  const { username } = useParams();
  console.log(username);

  useEffect(() => {
    fetch(`http://localhost:3001/restaurant/${username}`)
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log("yogi",user);

  return (
    <div className="location">
      <Navigationbar />
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
              <h1>Bheemas Grand</h1>
            </div>
          </div>
          <div className="Lines2">
            <div>
              <div>South Indian</div>
              {/* <br/><br /> */}
              <div>Road No 10, Banjara Hills</div>
              <br />
              <div className="Ratings">
                <div>
                  <div>
                    <span className="icon">"4.2"</span>
                  </div>
                  <div>
                    <span className="icons">1000+ ratings</span>
                  </div>
                </div>
                <hr />
                <div>
                  <div>
                    <span>34 Mins</span>
                  </div>
                  <div>Delivery Time</div>
                </div>
                <hr />
                <div>
                  <div>
                    <span>₹ 150</span>
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
            <div className="Offer">Offer</div>
            <div className="Offers">
              <div className="Offersered">
                <span className="imgoffer">
                  <img
                    src="https://static.thenounproject.com/png/347508-200.png"
                    className="imgoffer"
                  />
                </span>
                <div>
                  20% off up to ₹100 on orders above ₹400 + Up to ₹100 cashback
                  with Paytm | Use code JUMBO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recommended">
        <section className="section1">
          <div>
            <div className="everage">
              <div className="beverage">
                <a href="#" className="tag">
                  <div>Recommended</div>
                </a>
                <a href="#" className="tag">
                  <div>Beverages</div>
                </a>
                <a href="#" className="tag">
                  <div>Idlis & Vadas</div>
                </a>
                <a href="#" className="tag">
                  <div>Upma & Pongal</div>
                </a>
                <a href="#" className="tag">
                  <div>Bhajjis & Pakoras</div>
                </a>
                <a href="#" className="tag">
                  <div>Dosas</div>
                </a>
                <a href="#" className="tag">
                  <div>Uttapams</div>
                </a>
                <a href="#" className="tag">
                  <div>Pesarattus</div>
                </a>
                <a href="#" className="tag">
                  <div>Main Course</div>
                </a>
                <a href="#" className="tag">
                  <div>Thali</div>
                </a>
                <a href="#" className="tag">
                  <div>South Indian</div>
                </a>
              </div>
            </div>
            <div className="_1Lx"></div>
          </div>
        </section>
        <section className="section2">
          <div className="sec21">
            <h2 className="secrec">Recommended</h2>
            <div className="item">20 items</div>
            <div className="items">
              <div className="items1">
                <div className="items2">
                  <div className="items3">
                    <p></p>
                    <div className="items4">
                      <div className="items5">
                        <i></i>
                        <span className="best">
                          {/* <span className="bestseller">
                          ::before
                        </span> */}
                          Bestseller
                        </span>
                      </div>
                      <div className="items51">
                        <h3>Wada</h3>
                      </div>
                      <div>
                        <span className="serves">
                          <span>₹60</span>
                        </span>
                      </div>
                      <div className="serves">
                        |serves 1 | |Serves with Chutney,Sambar |
                      </div>
                    </div>
                    <div className="items41">
                      <div className="idliimg">
                        <button className="idlistyle">
                          <img
                            className="idlistyle1"
                            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ldnhwwhziwtxkfzp6vzc"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="addbutton">
                      <div className="addbuttons">
                        <div className="B1">ADD</div>
                        <div className="B2">+</div>
                        <div className="B3">0</div>
                        <div className="B4">-</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="itemsline"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="section3">chandu3</section>
      </div>
    </div>
  );
};
