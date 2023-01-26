import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { singersApi } from "../../services/singer";

export const listSinger = createAsyncThunk(
  "singer/list",
  async (_) => await singersApi.list()
);

const initialState = {
  singers: [],
  singer: {},
  isFetching: false,
  isSucess: false,
  isErr: false,
};

const singerSlice = createSlice({
  name: "singer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // list
    builder.addCase(listSinger.pending, (state, action) => {
      state.isFetching = true;
      state.isSucess = false;
      state.isErr = false;
    });
    builder.addCase(listSinger.fulfilled, (state, action) => {
      state.isFetching = false;
      state.isSucess = true;
      state.isErr = false;
      state.singers = action.payload.data;
    });
    builder.addCase(listSinger.rejected, (state, action) => {
      state.isFetching = false;
      state.isSucess = false;
      state.isErr = true;
    });
  },
});

export default singerSlice.reducer;
