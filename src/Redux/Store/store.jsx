import { createStore } from "redux";
import { reducer } from "../Reducer/reducer";
export const store = createStore(reducer, {
  count: 0,
  // itemss: [],
  itemss: "",
  amount: 0,
  hotelname: "",
  // location: "",
  // isauth:"",
  // detail:[],
});
