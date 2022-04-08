export const INC_COUNT = "INC_COUNT";
export const DESC_COUNT = "DESC_COUNT";
export const RESET = "RESET";
export const ADD_LOCATION = "ADD_LOCATION";
export const IS_AUTH = "IS_AUTH";
export const ADD_DETAIL = "ADD_DETAIL";
// action creator
// function which create action object

export const incCount = (payload) => {
  return {
    type: INC_COUNT,
    payload,
  };
};

export const decCount = (payload) => {
  return {
    type: DESC_COUNT,
    payload,
  };
};
export const reset = () => {
  return {
    type: RESET,
  };
};

export const addLocation = (payload) => ({
  type: ADD_LOCATION,
  payload,
});

export const isauth = (payload) => ({
  type: IS_AUTH,
  payload,
});
export const detail = (payload) => ({
  type: ADD_DETAIL,
  payload,
});
