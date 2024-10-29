export const UPDATE_LOGIN = "UPDATE_LOGIN";
export const UPDATE_DATA = "UPDATE_DATA";
export const CURRENTEDITEMPLOYEE = "CURRENTEDITEMPLOYEE";

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

export const currentEditEmployee = (payload) => {
  return {
    type: CURRENTEDITEMPLOYEE,
    payload,
  };
};
