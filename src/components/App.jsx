
  // import '../App.css';
  // import './Navbar'
  // import Navbar from './Navbar';
  //  import {data} from './data'
  // import MovieCard from './MovieCard.jsx'
  // import { useEffect } from 'react';

  // function App({store}) {
  //   const movies=store.getState();



  // //in older react we used didMountComponent, since React 19 it func have useEffect for api
  //   useEffect(()=>{

  //     store.subscribe(()=>{console.log('updated')})
  //     store.dispatch({type:'ADD_MOVIES',
  //       movies:data

  //     })

  //   },[]
  // )







  // return (
  //   <div className="App">
  //    <Navbar></Navbar>

  //     <div className="main">
  //       <div className='tabs'>
  //       <div className="tab">Movies</div>
  //       <div className='tab'>Favourites</div>
  //     </div>
  //     <div className='list'></div>

  //      { movies.map((movie,index)=>(
  //          <MovieCard movie={movie} key={`movie_${index}`}
  //          />
  //      ))
  //     }




  //     </div>
  //   </div>
  // );
  // }

  // export default App;






  // import React, { Component } from 'react';
  // import Navbar from './Navbar';
  // import MovieCard from './MovieCard.jsx';
  // import { data } from './data';

  // class App extends Component {
  //   componentDidMount() {
  //     const { store } = this.props;

  //     store.subscribe(() => {
  //       console.log('UPDATED');
  //       this.forceUpdate();
  //     });

  //     // Make API call
  //     // Dispatch action
  //     store.dispatch({
  //       type: 'ADD_MOVIES',
  //       movies: data
  //     });

  //     console.log('STATE', this.props.store.getState());
  //   }

  //   render() {
  //     const movies = this.props.store.getState();

  //     return (
  //       <div className="App">
  //         <Navbar />
  //         <div className="main">
  //           <div className="tabs">
  //             <div className="tab">Movies</div>
  //             <div className="tab">Favourites</div>
  //           </div>
  //           <div className="list">
  //             {movies.map((movie, index) => (
  //               <MovieCard movie={movie} key={`movie_${index}`} />
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }
  // }

  // export default App;






  import { useEffect, useState } from 'react';
  import Navbar from './Navbar';
  import MovieCard from './MovieCard.jsx';
  import { data } from './data';
  import { addMovies } from '../actions/index.js';

  function App({ store }) {

    // const [movies, setMovies] = useState(store.getState().list);


    // useEffect(() => {
    //   // Subscribe to store updates
    //   const unsubscribe = store.subscribe(() => {
    //     setMovies(store.getState().list); // Update local state
    //   });

    //   // Dispatch action to add movies
    //   // store.dispatch({
    //   //   type: 'ADD_MOVIES',
    //   //   movies: data
    //   // });

    //   store.dispatch(addMovies(data));


    //   return () => unsubscribe(); // Cleanup subscription when component unmounts
    // }, [data]);





    const [movies, setMovies] = useState(store.getState().movies.list);
    const [favourites, setFavourites] = useState(store.getState().movies.favourites);
    const[selectedTab, setSelectedTab]=useState(true)
    const [searchResult, setSearchResult]=useState(store.getState().search)

    
    console.log("app render")
    useEffect(() => {
      const unsubscribe = store.subscribe(() => {
        const newState = store.getState();
        setMovies(newState.movies.list); 
        setFavourites(newState.movies.favourites); 
        setSearchResult(newState.search.result)
        
      });
    
      store.dispatch(addMovies(data));
    
      return () => unsubscribe();
    }, []);
    




 function isMovieFavourite(movie){
 

          const index=  favourites.indexOf(movie);
          if(index!=-1){
            
          
          return true;
          }
          
          return false;
        }
              

  const displayMovies=selectedTab? movies:favourites;


    return (
      <div className="App">
        <Navbar dispatch={store.dispatch}
                result={searchResult}
        />
        <div className="main">

          <div className="tabs" >
            <div className={` tab ${selectedTab ? 'active-tabs' :''}`} 
            onClick={()=>{setSelectedTab(true)}} >Movies</div>
            
            <div className={` tab ${selectedTab ?'':'active-tabs'}`} 
            onClick={()=>{setSelectedTab(false)}} >Favourites</div>
          </div>

          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard 
              movie={movie}
              key={`movie_${index}`}
              dispatch={store.dispatch}
              isFavourite={isMovieFavourite(movie)
              }
            />
            ))}
          </div>
          <div>
            { !selectedTab&&favourites.length<1?<p>No Movies there to be shown</p>:""}
          </div>
        </div>
      </div>
    );
  }

  export default App;



 