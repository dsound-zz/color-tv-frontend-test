import { combineReducers } from "redux";
import { searchesReducer } from "./searchesReducer";
import { getUserReducer } from "./getUserReducer";
import { selectedPhotosReducer } from "./selectedPhotosReducer"

export default combineReducers({
  searches: searchesReducer,
  getUser: getUserReducer,
  selectedPhotos: selectedPhotosReducer
});
