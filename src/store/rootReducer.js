import { combineReducers } from "redux";
import categoryReducer from "./features/categorySlice";
import songReducer from "./features/songSlice";
import singerReducer from "./features/singerSlice";

const rootReducer = combineReducers({
  categoryReducer,
  songReducer,
  singerReducer,
});

export default rootReducer;
