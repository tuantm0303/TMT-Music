import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { categoriesApi } from "../../services/category";

export const listCategories = createAsyncThunk(
  "categories/list",
  async (_) => await categoriesApi.list()
);

// export const readCategories = createAsyncThunk(
//   "categories/read",
//   async (id) => await categoriesApi.read(id)
// );

export const createCategories = createAsyncThunk(
  "categories/add",
  async (data) => await categoriesApi.create(data)
);

export const updateCategories = createAsyncThunk(
  "categories/update",
  async (data) => await categoriesApi.update(data)
);

export const removeCategories = createAsyncThunk(
  "categories/remove",
  async (id) => await categoriesApi.remove(id)
);

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
    // list
    builder.addCase(listCategories.pending, (state, action) => {
      state.isFetching = true;
      state.isSucess = false;
      state.isErr = false;
    });
    builder.addCase(listCategories.fulfilled, (state, action) => {
      state.isFetching = false;
      state.isSucess = true;
      state.isErr = false;
      state.categories = action.payload.data;
    });
    builder.addCase(listCategories.rejected, (state, action) => {
      state.isFetching = false;
      state.isSucess = false;
      state.isErr = true;
    });
    // remove
    builder.addCase(removeCategories.fulfilled, (state, action) => {
      state.isFetching = false;
      state.isSucess = true;
      state.isErr = false;
      state.categories = state.categories.filter(
        (item) => item._id !== action.payload.data?.category._id
      );
    });
    builder.addCase(removeCategories.rejected, (state, action) => {
      state.isFetching = false;
      state.isSucess = false;
      state.isErr = true;
    });
    // create
    builder.addCase(createCategories.fulfilled, (state, action) => {
      state.isFetching = false;
      state.isSucess = true;
      state.isErr = false;
      state.categories.push(action.payload?.data);
    });
    builder.addCase(createCategories.rejected, (state, action) => {
      state.isFetching = false;
      state.isSucess = false;
      state.isErr = true;
    });
    // read
    // builder.addCase(readCategories.pending, (state, action) => {
    //   state.isFetching = true;
    //   state.isSucess = false;
    //   state.isErr = false;
    // });
    // builder.addCase(readCategories.fulfilled, (state, action) => {
    //   state.isFetching = false;
    //   state.isSucess = true;
    //   state.isErr = false;
    //   state.category = action.payload.data;
    // });
    // builder.addCase(readCategories.rejected, (state, action) => {
    //   state.isFetching = false;
    //   state.isSucess = false;
    //   state.isErr = true;
    // });
    // update
    builder.addCase(updateCategories.pending, (state, action) => {
      state.isFetching = true;
      state.isSucess = false;
      state.isErr = false;
    });
    builder.addCase(
      updateCategories.fulfilled,
      (state, { payload: { data } }) => {
        state.isFetching = false;
        state.isSucess = true;
        state.isErr = false;
        state.categories = state.categories.map((category) =>
          category._id === data._id ? data : category
        );
      }
    );
    builder.addCase(updateCategories.rejected, (state, action) => {
      state.isFetching = false;
      state.isSucess = false;
      state.isErr = true;
    });
  },
});

export default categoriesSlice.reducer;
