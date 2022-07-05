import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../AuthContext";
import { Navigationbar } from "./Navigationbar";
const StyledLink = styled(Link)`
  color: orange;
`;
const Wrapper = styled.div`
  align-item: center;
  width: 20%;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: -2px 10px 15px 5px #888888;
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
  .Form {
    display: flex;
    flex-direction: column;
    align-items: center;
    // height: 30vh;
    // width: 40vh;
  }
`;

// const StyledForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   border: 5px solid #888888;
//   align-items: center;
//   box-shadow: -2px 10px 15px 5px #888888;
// `;
const StyledInput = styled.input`
  height: 8vh;
  width: 40ch;
  // margin-top: -20px;
`;
const StyledInput2 = styled.input`
  height: 5vh;
  width: 19vh;
`;

export const Login = () => {
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    fetch(`https://reqres.in/api/login`, {
      method: "post",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("Token", res.token); //this part store data in localstorage
        // console.log(res.token);
        login(res.token);
      })
      .catch((err) => console.log(err));
  };

  // this part is make for local storage check

  useEffect(() => {
    if (localStorage.getItem("Token") !== null) {
      localStorage.getItem("Token");
      // console.log(localStorage.getItem("Token"));
      login(localStorage.getItem("Token"));
    }
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log(form);
  //   fetch("http://localhost:3001/persondetail")
  //     .then((response) => response.json())
  //     .then((res) => {
  //       console.log("res", res);
  //       setData(res);
  //     });
  //   };

  //   const boom=(data,form)=>{
  //     data.map((i) => {
  //       if (form.number === i.number && form.password === i.password) {
  //         setAuth("true");
  //       }
  //       console.log("data1", i.id, i.username, i.address, i.number);
  //     });
  //     if (auth === null) {
  //       setAuth("false");
  //     }
  //   }
  // boom(data,form);
  // console.log("63", form.number, form.password);
  // console.log("63",form,data);

  const { email, password } = form;

  return (
    <>
      <Navigationbar />
      <Wrapper>
        <h3>Login</h3>
        or
        <StyledLink to="/signup">Create Your Account</StyledLink>
        <Card>
          <form className="Form" onSubmit={handleSubmit}>
            {/* <h1>Login</h1> */}
            <StyledInput
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={handleChange}
              required
            />
            <br />
            <StyledInput
              type="text"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              required
            />
            <br />
            <StyledInput2 type="submit" value="Login" />
          </form>
        </Card>
      </Wrapper>
    </>
  );
};
