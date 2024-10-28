export const UPDATE_LOGIN = "UPDATE_LOGIN";
export const UPDATE_DATA = "UPDATE_DATA";

export const updateLogin = (payload) => {
  return {
    type: UPDATE_LOGIN,
    payload,
  };
};

export const updateData = (payload) => {
  return {
    type: UPDATE_DATA,
    payload,
  };
};
