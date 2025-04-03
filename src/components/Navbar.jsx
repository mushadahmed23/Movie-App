import React, { useState } from "react";
import {handleMovieSearch,addMovieToList} from '../actions'

function Navbar({dispatch,result}) 
{
    const [showSearchResults,setShowSearchResults]=useState(false);
    const [searchText,setSearchText]=useState('');
    
    


   const handleAddToMovies=(movie)=>{
        dispatch(addMovieToList(movie));
        setShowSearchResults(false);
       

    }

   const handleSearch=()=>{
    
     dispatch(handleMovieSearch(searchText));
     setShowSearchResults(true)
    }


    const handleChange=(event)=>{
    setSearchText(event.target.value);
    
    

}

return(
<div className="nav">
    <div className="search-container">
        <input onChange={(event)=>{handleChange(event)}} />
        <button id="search-btn" onClick={handleSearch}>Seach</button>
    </div>

    {showSearchResults &&
        <div className="search-results">
            <div className="search-result">
                <img src={result.Poster} alt="search-pic" />

                <div className="movie-info">
                    <span>{result.Title}</span>
                    <button onClick={() => handleAddToMovies(result)}>
                        Add to Movies
                    </button>
                </div>
            </div>
        </div>
    }
</div>

)
}
export default Navbar;