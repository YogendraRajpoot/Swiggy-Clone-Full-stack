import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  // color:green;
  border: 2px solid black;
  // background-color: yellow;
  // .acc {
  //   display: flex;
  // }
  .cartaccount {
    width: 70%;
    height: 200px;
    background-color: black;
  }
  .cartaccount2 {
    // display:flex;
    margin: 30px;
  }
  .cartimg {
    display: flex;
  }
  .acimg {
    width: 50px;
    height: 50px;
  }
  .restname {
    text-align: left;
    margin: 3%;
  }
  .save {
    font-size: 12px;
    text-align: left;
  }
  .wel {
    text-align: left;
    font-size: 18px;
    margin-top: 3%;
  }
  .rost {
    display: flex;
    margin: 10px;
  }
  .rost1 {
    margin: 5px;
    margin-left: 0px;
  }
  .rost3 {
    margin: 5px;
    margin-left: 40px;
  }
  .any {
    height: 30px;
    width: 100%;
    background-color: rgb(180, 188, 180);
    padding: 2%;
    color: black;
  }
  .box {
    display: flex;
    border: 1px solid black;
    margin: 10px;
    padding: 2%;
    height: auto;
    width: 300px;
  }
  .checkbox {
    margin-top: 4%;
  }
  .opt {
    text-align: left;
    padding: 4px;
    margin-top: 0px;
  }
  .unwell {
    // text-align: left;
    // padding: 0px;
    // margin-top: -25px;
    font-size: medium;
  }
  .left {
    text-align: left;
  }
  .right {
    text-align: right;
    margin-top: -35px;
    padding-top: 0px;
  }
  .line {
    height: 5px solid black;

    margin: 10px;
    background-color: black;
  }
  .bill {
    height: 50;
    width: auto;
    background-color: lightgreen;
    margin: 20px;
  }
  .hr {
    margin-left: auto;
    margin-right: auto;
    width: 94%;
    margin-top: 2%;
  }
`;

export const Cartsection = () => {
  const hotelname = useSelector((state) => state.hotelname);
  const amount = useSelector((state) => state.amount);
  const itemss = useSelector((state) => state.itemss);
  console.log(hotelname);
  // return (
  //   <div>Cart</div>
  // )
  return (
    <Wrapper>
      <div className="acc">
        {/* <section className="cartaccount"></section> */}
        <section className="cartaccount2">
          <div className="cartimg">
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bf8lxofujojdyzgrsgmg"
              className="acimg"
            />
            <div className="restname">
              <div>
                <h1>{hotelname}</h1>
              </div>
            </div>
          </div>

          <div className="wel">Welcome to Your cart</div>
          <div className="save">
            <span>saved ₹100 on these items!</span>
          </div>
          <div className="rost">
            <div className="rost1">
              {itemss} :- ₹{amount}
            </div>
            {/* <button onClick={() => setCount(count + 1)}>+</button>
            <button>{count}</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <div className="rost3">₹100</div> */}
          </div>
          <input
            className="any"
            placeholder="Any suggestions? We will pass it on ......."
          ></input>
          <div className="box">
            <input type="checkbox" className="checkbox"></input>
            <div className="boxes">
              <h4 className="opt">Opt in for No-contact Delivery</h4>
              <p className="unwell">
                Unwell, or avoiding contact? Please select no-contact delivery.
                Partner will safely place the order outside your door(not for
                COD)
              </p>
            </div>
          </div>
          <div className="left">Bill details</div>
          <div className="Tot">
            <div className="left">Item total</div>
            <div className="right">₹{amount}</div>
          </div>
          <hr className="hr" />
          <div>
            <div className="left">Delivery Fee | 2.8 kms</div>
            <div className="right">FREE</div>
          </div>
          <hr className="hr" />
          <div>
            <div className="left">Item Discount (50% for 1st order)!</div>
            <div className="right">-₹{(amount * 50) / 100} </div>
          </div>
          <hr className="hr" />
          <div>
            <div className="left">Taxes and charges! (18%)</div>
            <div className="right">₹{(amount * 18) / 100}</div>
          </div>
          <hr className="hr" />
          <div>
            <div className="left">TO PAY</div>
            <div className="right">
              ₹{amount + (amount * 18) / 100 - (amount * 10) / 100}
            </div>
          </div>
          <hr className="hr" />
          <div className="bill">
            you have saved ₹
            {amount +
              (amount * 18) / 100 +
              100 -
              (amount + (amount * 18) / 100 - (amount * 50) / 100)}{" "}
            on the bill
          </div>
        </section>
      </div>
    </Wrapper>
  );
};
