import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [formData, setformData] = useState({
    username: "",
    address: "",
    number: "",
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
  const { username, address, number } = formData;

  const handlesubmit = (e) => {
    e.preventDefault();
    // console.log(formData );
    fetch("http://localhost:3001/persondetail", {
      method: "Post",
      body: JSON.stringify(formData),
      headers: { "content-type": "application/json" },
    }).then((res) => console.log(res));
    navigate("/login")
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <h1>Form</h1>
        Name:-
        <input
          id="username"
          type="text"
          placeholder="Enter Name"
          onChange={handleChange}
          value={username}
        />
        <br />
        Address:-
        <input
          id="address"
          type="text"
          placeholder="Enter Address"
          onChange={handleChange}
          value={address}
        />
        <br />
        Mobile Number:-
        <input
          id="number"
          type="number"
          placeholder="Mobile Number"
          onChange={handleChange}
          value={number}
        />
        <br />
        <input type="submit" value="submit" />
        <br />
        <br />
      </form>
    </>
  );
};
