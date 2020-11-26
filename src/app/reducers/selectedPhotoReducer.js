const initialState = {
  selectedPhoto: [],
};

export const selectedPhotoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTED_PHOTO":
      return { ...state, selectedPhoto: action.payload };
    default:
      return state;
  }
};
