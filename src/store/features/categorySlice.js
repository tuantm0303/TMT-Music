import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { categoriesApi } from "../../services/category";

export const listCategories = createAsyncThunk(
  "categories/list",
  async (_) => await categoriesApi.list()
);

// export const readCategories = createAsyncThunk(
//   "categories/read",
//   async (_) => await categoriesApi.read()
// );

// export const createCategories = createAsyncThunk(
//   "categories/add",
//   async (_) => await categoriesApi.create()
// );

// export const updateCategories = createAsyncThunk(
//   "categories/list",
//   async (_) => await categoriesApi.update()
// );

// export const remoteCategories = createAsyncThunk(
//   "categories/list",
//   async (_) => await categoriesApi.remove()
// );

const initialState = {
  categories: [],
  category: {},
  isFetching: false,
  isSucess: false,
  isErr: false,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listCategories.pending, (state, action) => {
      state.isFetching = true;
      state.isSucess = false;
      state.isErr = false;
    });
    builder.addCase(listCategories.fulfilled, (state, action) => {
      state.isFetching = false;
      state.isSucess = true;
      state.isErr = false;
      state.categories = action.payload;
    });
    builder.addCase(listCategories.rejected, (state, action) => {
      state.isFetching = false;
      state.isSucess = false;
      state.isErr = true;
    });
  },
});

export default categoriesSlice.reducer;
