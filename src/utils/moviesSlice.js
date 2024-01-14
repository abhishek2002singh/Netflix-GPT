import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideos: null,
        count:0

    },
    reducers: {
        addNowPlayingMovies: (state , action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies: (state , action)=>{
            state.PopularMovies=action.payload;
        },
        addTreandingMovies: (state , action)=>{
            state.TreandingMovies=action.payload;
        },
        addTopRatingMovies: (state , action)=>{
            state.TopRatingMovies=action.payload;
        },
        addTrailerVideos:(state , action )=>{
            state.trailerVideos = action.payload;
        },
        increaseCount:(state,action)=>{
            state.count = state.count + 1;
        }
    }
});

export const {addNowPlayingMovies ,addPopularMovies ,addTreandingMovies ,addTopRatingMovies , addTrailerVideos,increaseCount}=moviesSlice.actions;

export default moviesSlice.reducer;