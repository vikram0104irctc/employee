import { CURRENTEDITEMPLOYEE, UPDATE_DATA, UPDATE_LOGIN } from "./actions";

const initState = {
  login: localStorage.getItem("token") ? true : false,
  data: [],
  currEditEmployee: {},
};

export function Reducer(state = initState, action) {
  switch (action.type) {
    case UPDATE_LOGIN:
      return { ...state, login: action.payload };
    case UPDATE_DATA:
      return { ...state, data: action.payload };
    case CURRENTEDITEMPLOYEE:
      return { ...state, currEditEmployee: action.payload };
    default:
      return state;
  }
}
