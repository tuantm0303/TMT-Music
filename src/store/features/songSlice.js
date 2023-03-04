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

export const createSong = createAsyncThunk(
  "songs/create",
  async (data) => await songsApi.create(data)
);

export const readSong = createAsyncThunk(
  "song/read",
  async (id) => await songsApi.read(id)
);

export const updateSong = createAsyncThunk(
  "songs/update",
  async (id) => await songsApi.update(id)
);

const initialState = {
  songs: [],
  song: {},
  currentIndex: 0,
  isFetching: false,
  isSucess: false,
  isErr: false,
};

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    setCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;
    },
    nextPrevSong: (state, action) => {
      state.song = state.songs[action.payload];
      state.currentIndex = action.payload;
    },
  },
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
    // create
    builder.addCase(createSong.pending, (state, action) => {
      state.isFetching = true;
      state.isSucess = false;
      state.isErr = false;
    });
    builder.addCase(createSong.fulfilled, (state, action) => {
      state.isFetching = false;
      state.isSucess = true;
      state.isErr = false;
      state.songs.push(action.payload.data);
    });
    builder.addCase(createSong.rejected, (state, action) => {
      state.isFetching = false;
      state.isSucess = false;
      state.isErr = true;
    });
    // read
    builder.addCase(readSong.pending, (state, action) => {
      state.isFetching = true;
      state.isSucess = false;
      state.isErr = false;
    });
    builder.addCase(readSong.fulfilled, (state, action) => {
      state.isFetching = false;
      state.isSucess = true;
      state.isErr = false;
      state.song = action.payload.data;
    });
    builder.addCase(readSong.rejected, (state, action) => {
      state.isFetching = false;
      state.isSucess = false;
      state.isErr = true;
    });
    // update
    builder.addCase(updateSong.pending, (state, action) => {
      state.isFetching = true;
      state.isSucess = false;
      state.isErr = false;
    });
    builder.addCase(updateSong.fulfilled, (state, { payload: { data } }) => {
      state.isFetching = false;
      state.isSucess = true;
      state.isErr = false;
      state.songs = state.songs.map((song) =>
        song._id === data._id ? data : song
      );
    });
    builder.addCase(updateSong.rejected, (state, action) => {
      state.isFetching = false;
      state.isSucess = false;
      state.isErr = true;
    });
  },
});

export const { setCurrentIndex, nextPrevSong } = songSlice.actions;

export default songSlice.reducer;
