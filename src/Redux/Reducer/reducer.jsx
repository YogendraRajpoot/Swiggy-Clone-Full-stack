// import {
//   ADD_LOCATION,
//   ADD_DETAIL,
//   IS_AUTH,
// } from "../Action/action";
import { DESC_COUNT, INC_COUNT,RESET } from "../Action/action";

export const reducer = (store, { type, payload }) => {
  switch (type) {
    case INC_COUNT:
      return {
        count: store.count + payload,
      };
    case DESC_COUNT:
      return {
        count: store.count - payload,
      };

    case RESET:
      return {
        count: 0,
      };

    // case ADD_LOCATION:
    //   return {
    //     ...store,
    //     location: payload,
    //   };
    // case IS_AUTH:
    //   return {
    //     ...store,
    //     isauth: payload,
    //   };
    // case ADD_DETAIL:
    //   return {
    //     ...store,
    //     detail: [payload],
    // };

    default:
      return store;
  }
};
