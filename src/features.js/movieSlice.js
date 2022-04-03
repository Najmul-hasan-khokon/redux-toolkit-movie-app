import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// api key er modde string ba letter and number ache tai evabe concat korci.
// 37 + "ade" + 290;
// templete literal korleo prblm nai
const apiKey = `37ade290`; // apikey sorasori o bosaite partam.

// movies async action creator middleware thunk
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (searchText) => {
    // "https://www.omdbapi.com/?s=Harry&apikey=f9441ff&type=movie"
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${
        searchText ? searchText : "Harry"
      }&apikey=${apiKey}&type=movie`
    );

    return response.data;
  }
);

// shows async action creator middleware thunk
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (searchText) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${
        searchText ? searchText : "friends"
      }&apikey=${apiKey}&type=series`
    );
    return response.data;
  }
);

// movie details async action creator middleware thunk
export const fetchAsyncMovieDetails = createAsyncThunk(
  "movies/fetchAsyncMovieDetails",
  async (movieId) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}&`
    );

    return response.data;
  }
);

const initialState = {
  movies: [],
  shows: [],
  movieOrShowDetails: {},
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // addMovies: (state, { payLoad }) => {
    //   state.movies = payLoad;
    //   console.log(payLoad);
    // },
    unmountMovieOrShow: (state, { payload }) => {
      state.movieOrShowDetails = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected!");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      // console.log("fatched shows succesfully!");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieDetails.fulfilled]: (state, { payload }) => {
      return { ...state, movieOrShowDetails: payload };
    },
  },
});

export const { unmountMovieOrShow } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getDetailsMovieOrShow = (state) => state.movies.movieOrShowDetails;
export default moviesSlice.reducer;
