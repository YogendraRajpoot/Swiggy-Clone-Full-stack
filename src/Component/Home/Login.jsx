import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navigationbar } from "./Navigationbar";

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

export const Login = () => {
  // const { login } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    number: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  // this part is make for local storage check

  // useEffect(() => {
  //   if (localStorage.getItem("Token") !== null) {
  //     console.log(localStorage.getItem("Token"));
  //     login(localStorage.getItem("Token"));
  //   }
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    fetch("http://localhost:3001/persondetail")
      .then((response) => response.json())
      .then((res) => {
        console.log("res", res);
        setData(res);
      });
  };
  data.map((i) => {
    
    console.log("data1", i.id, i.username, i.address, i.number);
  });

  // localStorage.setItem("Token", res.token); //this part store data in localstorage
  const { number, password } = form;

  return (
    <>
      <Navigationbar />
      <Wrapper>
        <h3>Login</h3>
        or
        <StyledLink to="/signup">Create Your Account</StyledLink>
        <Card>
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input
              type="text"
              name="number"
              placeholder="number"
              value={number}
              onChange={handleChange}
            />
            <br />
            <br />
            <input
              type="text"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
            <br />
            <input type="submit" value="Login" />
          </form>
        </Card>
      </Wrapper>
    </>
  );
};
