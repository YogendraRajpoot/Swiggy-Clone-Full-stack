import { ADD_DETAIL, IS_AUTH } from "../Action/action";
import { ADD_LOCATION } from "../Action/action";

export const reducer = (store, { type, payload }) => {
  switch (type) {
    case ADD_LOCATION:
      return {
        ...store,
        location: payload,
      };
    case IS_AUTH:
      return {
        ...store,
        isauth: payload,
      };
    case ADD_DETAIL:
      return {
        ...store,
        detail: [payload],
      };

    default:
      return store;
  }
};
