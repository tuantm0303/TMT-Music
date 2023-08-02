import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import categoryReducer from "./features/categorySlice";
import singerReducer from "./features/singerSlice";
import songReducer from "./features/songSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["songReducer"],
};

const reducers = combineReducers({
  categoryReducer,
  songReducer,
  singerReducer,
});

const rootReducer = persistReducer(persistConfig, reducers);

export default rootReducer;
