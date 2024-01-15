// const { createSlice } = require("@reduxjs/toolkit");

import { createSlice } from "@reduxjs/toolkit";


// const gptSlice=createSlice({
//     name: "gpt",
//     initialState:{
//         showGptSearch : false,
//     },
//     reducers :{
//         toggleGptSearchView:(state , action)=>{
//             state.showGptSearch=!state.showGptSearch;
//         },
//     },
// })

// export const { toggleGptSearchView }=gptSlice.actions

// export default gptSlice.reducer

const gptSlice = createSlice({
    name : "gpt",
    initialState : {
        showGptSearch : false,
        movieResult:null,
        movieName :null,
    },
    reducers :{
        toggleGptSearchView : (state , action)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addGptMoviesResult:(state , action)=>{
            const { movieName , movieResult } =action.payload
             state.movieName=movieName;
             state.movieResult=movieResult;
        },
        
    },
})

export const {toggleGptSearchView , addGptMoviesResult}= gptSlice.actions
export default gptSlice.reducer