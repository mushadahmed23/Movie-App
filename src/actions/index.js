// {
//     type:'ADD_MOVIES
//     movies:[m1,m2,m3]
// }
// {
//     type:'DECREASE_COUNT'
// } 

export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const ADD_MOVIE_TO_LIST='ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT='ADD_SEARCH_RESULT';


export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
}
export function addFavourite(movie) {
    return {
        type: ADD_FAVOURITE,
        movie
    }
}


export function removeFavourite(movie) {
    return {
        type: REMOVE_FAVOURITE,
        movie
    }

}

export function addMovieToList(movie) {
    return {
        type: ADD_MOVIE_TO_LIST,
        movie: movie

    }
}

export function handleMovieSearch(movie) {
    const url = ` http://www.omdbapi.com/?i=tt3896198&apikey=91bfc52d&t=${movie}`;
    
    return function(dispatch) {
        fetch(url) .
        then(response => response.json()).
        then((movie)=>{
          
       dispatch(addMovieSearchResult(movie))
    })

    }
}


export function addMovieSearchResult(movie){
    return {
        type:ADD_SEARCH_RESULT,
        movie:movie
    }
}




