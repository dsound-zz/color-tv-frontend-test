import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
});

export const getUserAction = (username) => (dispatch) => {
  unsplash.users
    .profile(username)
    .then(toJson)
    .then((json) => {
      dispatch({ type: "GET_USER", payload: json });
    })
    .catch((res) => console.log(res.errors));
};
