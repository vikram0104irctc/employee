import { UPDATE_DATA, UPDATE_LOGIN } from "./actions";

const initState = {
  login: localStorage.getItem("token") ? true : false,
  data: [],
};

export function Reducer(state = initState, action) {
  switch (action.type) {
    case UPDATE_LOGIN:
      return { ...state, login: action.payload };
    case UPDATE_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
