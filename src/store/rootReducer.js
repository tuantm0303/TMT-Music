import { combineReducers } from "redux";
import categoryReducer from "./features/categorySlice";

const rootReducer = combineReducers({
  categoryReducer,
});

export default rootReducer;
