



// const API = "https://api.unsplash.com/search/users?query=";

export const selectPhotoAction = (fullPhoto) => (dispatch) => {
  
      dispatch({ type: "SEARCH", payload: fullPhoto });
 
   
};
