
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
});

// const API = "https://api.unsplash.com/search/users?query=";

export const queryAction = query => (dispatch) => {
  unsplash
    .search.users(query)
    .then(toJson)
    .then(json => {
     
      dispatch({ type: "SEARCH", payload: json });
    })
    .catch((res) => console.log(res.errors));
};
