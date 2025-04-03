import { combineReducers } from "redux";
import {ADD_SEARCH_RESULT,ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, ADD_MOVIE_TO_LIST } from "../actions";

const intialMoviesState = {
    list: [],
    favourites: []
}

export function movies(state = intialMoviesState, action) {

    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }

        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }

        case REMOVE_FAVOURITE:
            return {
                ...state,
                favourites: state.favourites.filter(movie => movie !== action.movie)
            }

            case ADD_MOVIE_TO_LIST:
                return{
                    ...state,
                    list:[action.movie, ...state.list]
                }

        default:
            return state

    }
}

const intialSearchState = {
    result: {}
}


export function search(state = intialSearchState, action) {
    
    
    switch (action.type) {
        
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result:action.movie
                
            }
            default:
                return state;
    
    
    

}
}









// const intialRootState = {
//     movies: intialMoviesState,
//     search: intialSearchState

// }
// export default function rootReducer(state =intialRootState, action) {

//     return {
//         movies: movies(state.movies, action),
//         search: search(state, action)
//     }

// }



// we dont need rootReducer just use inbuild redux combiner it runs internally like rootreducer


export default combineReducers({
    movies:movies,
    search:search

});