import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decCount, incCount } from "../Redux/Action/action";

export const Blank = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch  ();

  return (
    <div>
      Blank
      <Link to="/home">Home</Link>
      <div>
        <h1>Count : {count}</h1>
        <button onClick={() => dispatch(incCount(2))}> INC COUNT</button>
        <button onClick={() => dispatch(decCount(2))}> DEC COUNT</button>
      </div>
    </div>
  );
};
