import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { songsApi } from "../../services/song";

export const listSong = createAsyncThunk(
  "songs/list",
  async (_) => await songsApi.list()
);

export const removeSong = createAsyncThunk(
  "songs/remove",
  async (id) => await songsApi.remove(id)
);

const initialState = {
  songs: [],
  song: {},
  isFetching: false,
  isSucess: false,
  isErr: false,
};

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // list
    builder.addCase(listSong.pending, (state, action) => {
      state.isFetching = true;
      state.isSucess = false;
      state.isErr = false;
    });
    builder.addCase(listSong.fulfilled, (state, action) => {
      state.isFetching = false;
      state.isSucess = true;
      state.isErr = false;
      state.songs = action.payload.data;
    });
    builder.addCase(listSong.rejected, (state, action) => {
      state.isFetching = false;
      state.isSucess = false;
      state.isErr = true;
    });
    // remove
    builder.addCase(removeSong.pending, (state, action) => {
      state.isFetching = true;
      state.isSucess = false;
      state.isErr = false;
    });
    builder.addCase(removeSong.fulfilled, (state, action) => {
      state.isFetching = false;
      state.isSucess = true;
      state.isErr = false;
      state.songs = state.songs.filter(
        (item) => item._id !== action.payload.data.song._id
      );
    });
    builder.addCase(removeSong.rejected, (state, action) => {
      state.isFetching = false;
      state.isSucess = false;
      state.isErr = true;
    });
  },
});

export default songSlice.reducer;
