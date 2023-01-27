import { combineReducers } from "redux";
import categoryReducer from "./features/categorySlice";
import songReducer from "./features/songSlice";
import singerReducer from "./features/singerSlice";
import authorReducer from "./features/authorSlice";

const rootReducer = combineReducers({
  categoryReducer,
  songReducer,
  singerReducer,
  authorReducer,
});

export default rootReducer;
