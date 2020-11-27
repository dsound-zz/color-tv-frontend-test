// const API = "https://api.unsplash.com/search/users?query=";

export const selectPhotosAction = (photos) => (dispatch) => {
  
  dispatch({ type: "SELECTED_PHOTOS", payload: photos });
};
