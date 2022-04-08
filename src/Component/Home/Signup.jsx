import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigationbar } from "./Navigationbar";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: orange;
`;
const Wrapper = styled.div`
  align-item: center;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  // align-item: center;
  // width: 60%;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid black;
`;
const Card = styled.div`
  margin-left: auto;
  margin-right: auto;
  border: 2px solid red;
`;

export const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [formData, setformData] = useState({
    username: "",
    address: "",
    number: "",
    password:"",
  });

  //   useEffect(() => {
  //     getTodo();
  //   }, []);

  //   const getTodo = () => {
  //     fetch(`http://localhost:3001/persondetail`)
  //       .then((res) => res.json())
  //       .then((res) => {
  //         setData(res);
  //         console.log(data);
  //       });
  //   };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setformData({ ...formData, [id]: value });
  };
  const { username, address, number,password } = formData;

  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log(formData );
    fetch("http://localhost:3001/persondetail", {
      method: "Post",
      body: JSON.stringify(formData),
      headers: { "content-type": "application/json" },
    }).then((res) => console.log(res));
    navigate("/login");
  };

  return (
    <>
      <Navigationbar />
      <Wrapper>
        <h3>Login</h3>
        or
        <StyledLink to="/login">Login To Your Account</StyledLink>
        <Card>
          <form onSubmit={handlesubmit}>
            Name:-
            <input
              id="username"
              type="text"
              placeholder="Enter Name"
              onChange={handleChange}
              value={username}
              required
            />
            <br />
            Address:-
            <input
              id="address"
              type="text"
              placeholder="Enter Address"
              onChange={handleChange}
              value={address}
              required
            />
            <br />
            Mobile Number:-
            <input
              id="number"
              type="number"
              placeholder="Mobile Number"
              onChange={handleChange}
              value={number}
              required
            />
            <br />
            Password:-
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              onChange={handleChange}
              value={password}
              required
            />
            <br />
            <input type="submit" value="submit" />
            <br />
            <br />
          </form>
        </Card>
      </Wrapper>
    </>
  );
};
