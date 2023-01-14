import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({
  // DÙNG ĐỂ CẬP NHẬT LẠI GIÁ TRỊ STATE THÔNG QUA ACTION
  // là function nhận vào hai đối số là state và action.
  // sử dụng để cập nhật state trong store
  // kiểm tra action để cập nhật lại state tương ứng
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
