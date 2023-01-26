import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { singersApi } from "../../services/singer";

export const listSinger = createAsyncThunk(
  "singer/list",
  async (_) => await singersApi.list()
);

export const removeSinger = createAsyncThunk(
  "singer/remove",
  async (id) => await singersApi.remove(id)
);

export const createSinger = createAsyncThunk(
  "singer/create",
  async (data) => await singersApi.create(data)
);

export const updateSinger = createAsyncThunk(
  "singer/update",
  async (data) => await singersApi.update(data)
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
    // remove
    builder.addCase(removeSinger.pending, (state, action) => {
      state.isFetching = true;
      state.isSucess = false;
      state.isErr = false;
    });
    builder.addCase(removeSinger.fulfilled, (state, action) => {
      state.isFetching = false;
      state.isSucess = true;
      state.isErr = false;
      state.singers = state.singers.filter(
        (item) => item._id !== action.payload.data.singer._id
      );
    });
    builder.addCase(removeSinger.rejected, (state, action) => {
      state.isFetching = false;
      state.isSucess = false;
      state.isErr = true;
    });
    // create
    builder.addCase(createSinger.pending, (state, action) => {
      state.isFetching = true;
      state.isSucess = false;
      state.isErr = false;
    });
    builder.addCase(createSinger.fulfilled, (state, action) => {
      state.isFetching = false;
      state.isSucess = true;
      state.isErr = false;
      state.singers.push(action.payload.data);
    });
    builder.addCase(createSinger.rejected, (state, action) => {
      state.isFetching = false;
      state.isSucess = false;
      state.isErr = true;
    });
    // update
    builder.addCase(updateSinger.pending, (state, action) => {
      state.isFetching = true;
      state.isSucess = false;
      state.isErr = false;
    });
    builder.addCase(updateSinger.fulfilled, (state, { payload: { data } }) => {
      state.isFetching = false;
      state.isSucess = true;
      state.isErr = false;
      state.singers = state.singers.map((singer) =>
        singer._id === data._id ? data : singer
      );
    });
    builder.addCase(updateSinger.rejected, (state, action) => {
      state.isFetching = false;
      state.isSucess = false;
      state.isErr = true;
    });
  },
});

export default singerSlice.reducer;
