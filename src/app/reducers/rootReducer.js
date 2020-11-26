import { combineReducers } from "redux";
import { searchesReducer } from "./searchesReducer";
import { getUserReducer } from "./getUserReducer";
import { selectedPhotoReducer } from "./selectedPhotoReducer"

export default combineReducers({
  searches: searchesReducer,
  getUser: getUserReducer,
  selectedPhoto: selectedPhotoReducer
});
