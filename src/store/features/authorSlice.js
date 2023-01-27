import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authorsApi } from "../../services/author";

export const listAuthor = createAsyncThunk(
  "author/list",
  async (_) => await authorsApi.list()
);

export const removeAuthor = createAsyncThunk(
  "author/remove",
  async (id) => await authorsApi.remove(id)
);

const initialState = {
  authors: [],
  author: {},
  isFetching: false,
  isSucess: false,
  isErr: false,
};

const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // list
    builder.addCase(listAuthor.pending, (state, action) => {
      state.isFetching = true;
      state.isSucess = false;
      state.isErr = false;
    });
    builder.addCase(listAuthor.fulfilled, (state, action) => {
      state.isFetching = true;
      state.isSucess = false;
      state.isErr = false;
      state.authors = action.payload.data;
    });
    builder.addCase(listAuthor.rejected, (state, action) => {
      state.isFetching = true;
      state.isSucess = false;
      state.isErr = false;
    });
    // remove
    builder.addCase(removeAuthor.pending, (state, action) => {
      state.isFetching = true;
      state.isSucess = false;
      state.isErr = false;
    });
    builder.addCase(removeAuthor.fulfilled, (state, action) => {
      state.isFetching = false;
      state.isSucess = true;
      state.isErr = false;
      state.authors = state.authors.filter(
        (item) => item._id !== action.payload.data.author._id
      );
    });
    builder.addCase(removeAuthor.rejected, (state, action) => {
      state.isFetching = false;
      state.isSucess = false;
      state.isErr = true;
    });
  },
});

export default authorSlice.reducer;
