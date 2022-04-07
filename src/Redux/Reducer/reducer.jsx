import { ADD_LOCATION } from "./action";

export const reducer = (store , {type,payload}) => {
  switch (type) {
    case ADD_LOCATION:
      return {
        location: payload,
      };

    default:
      return store;
  }
};
