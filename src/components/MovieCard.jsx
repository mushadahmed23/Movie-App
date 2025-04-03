    import React, { useState } from "react";
    import { addFavourite,removeFavourite} from "../actions";
    function MovieCard (props)
    {


    const{movie,dispatch,isFavourite}=props


    function addToFavourite(movie){

        dispatch(addFavourite(movie));
            

    }

    function removeFromFavourite(movie){
        dispatch(removeFavourite(movie));


    }


    return(

    <
    div className="movie-card">
    <div className="left">
    <img
        alt='movie-poster'
        src={movie.Poster}
    ></img>
    </div>
    <div className="right">
    <div className="title">{movie.Title}</div>
    <div className="plot">{movie.Plot}</div>
    <div className="footer">
        <div className="rating">{movie.imdbRating}</div>

        { isFavourite ? 
        <button className="unfavourite-btn" onClick={() => removeFromFavourite(movie)}>
        UnFavourites
      </button>
        
         :
  <button className="favourite-btn" onClick={() => addToFavourite(movie)}>
    Favourites
  </button>
}

        </div>

    </div>
    </div>

    )
    }


    export default MovieCard;