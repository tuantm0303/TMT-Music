import { combineReducers } from "redux";
import categoryReducer from "./features/categorySlice";
import songReducer from "./features/songSlice";

const rootReducer = combineReducers({
  categoryReducer,
  songReducer,
});

export default rootReducer;
