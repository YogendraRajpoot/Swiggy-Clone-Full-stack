export const ADD_LOCATION = "ADD_LOCATION";
export const IS_AUTH = "IS_AUTH";
export const ADD_DETAIL = "ADD_DETAIL";
// action creator
// function which create action object

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
