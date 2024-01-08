import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideos: null,

    },
    reducers: {
        addNowPlayingMovies: (state , action)=>{
            state.nowPlayingMovies=action.payload;
        },
        // addPopularMovies: (state , action)=>{
        //     state.PopularMovies=action.payload;
        // },
        // addTreandingMovies: (state , action)=>{
        //     state.TreandingMovies=action.payload;
        // },
        // addTopRatingMovies: (state , action)=>{
        //     state.TopRatingMovies=action.payload;
        // },
        addTrailerVideos:(state , action )=>{
            state.trailerVideos = action.payload;
        }
    }
});

export const {addNowPlayingMovies , addTrailerVideos}=moviesSlice.actions;

export default moviesSlice.reducer;