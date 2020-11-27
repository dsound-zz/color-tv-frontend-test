const initialState = {
  selectedPhotos: [],
};

export const selectedPhotosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTED_PHOTOS":
      return { ...state, selectedPhotos: action.payload };
    default:
      return state;
  }
};
