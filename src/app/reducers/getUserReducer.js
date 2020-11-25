const initialState = {
  user: [],
};

export const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
