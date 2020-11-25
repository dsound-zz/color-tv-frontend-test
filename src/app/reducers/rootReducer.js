import { combineReducers } from "redux";
import { searchesReducer } from "./searchesReducer";
import { getUserReducer } from "./getUserReducer";


export default combineReducers({
  searches: searchesReducer,
  getUser: getUserReducer,
});
