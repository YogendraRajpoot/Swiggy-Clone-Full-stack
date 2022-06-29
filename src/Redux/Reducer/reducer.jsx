// import {
//   ADD_LOCATION,
//   ADD_DETAIL,
//   IS_AUTH,
// } from "../Action/action";
import { DESC_COUNT, INC_COUNT,RESET ,ADD_ITEM, AMOUNT, ADD_HOTELNAME} from "../Action/action";

export const reducer = (store, { type, payload }) => {
  switch (type) {
    case INC_COUNT:
      return {
        ...store,
        count: store.count + payload,
      };
    case DESC_COUNT:
      return {
        ...store,
        count: store.count - payload,
      };
      case AMOUNT:
      return {
        ...store,
        amount: store.amount + payload,
      };

    case RESET:
      return {
        ...store,
        count: 0,
      };
      case ADD_ITEM:
        return{
          ...store,
          // itemss:[...store.itemss ,payload]
          itemss:payload,
        }
        case ADD_HOTELNAME :
        return{
          ...store,
          // itemss:[...store.itemss ,payload]
          hotelname:payload,
        }

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
