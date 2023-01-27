import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authorsApi } from "../../services/author";

export const listAuthor = createAsyncThunk(
  "author/list",
  async (_) => await authorsApi.list()
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
  },
});

export default authorSlice.reducer;
