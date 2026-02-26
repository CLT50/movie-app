import React from 'react'
import { useState, useEffect} from 'react'
import MovieCard from '../components/MovieCard'
import { searchMovies, getPopularMovies } from '../services/api'
import './Home.css'
import Slot from '../components/Slot'

const Home = () => {
  const [searchQuery, setSearchQuery]= useState('');
  const [movies, setMovies]= useState([]);
  const [error, setError]= useState(null);
  const [loading, setLoading]= useState(true);


// Define loadPopularMovies inside the component to have access to setMovies, setError, setLoading, etc.
  const loadPopularMovies = async () => {
    setLoading(true);
    try {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
      setError(null); // Clear any previous errors
    } catch (err) {
      console.log(err);
      setError('Failed to load movies...');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPopularMovies();
  }, []); // Empty dependency array means this runs once on mount

  const handleSearch = async (e) => {
    e.preventDefault();
    const currentQuery = searchQuery.trim();
    if (!currentQuery) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(currentQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError('Failed to search movies...');
    } finally {
      setLoading(false);
    }
  };

  
  return (

    <div>
    <Slot/>

    <div className='home'>
         <form className='search-form' onSubmit={handleSearch}>
          <input type='text' placeholder='Search for movies...'
          className='search-input' value={searchQuery} 
          onChange={(e)=> setSearchQuery(e.target.value)}/>
          <button type='submit' className='search-button'>Search</button>
          {/* Button to clear input and potentially reload popular movies if desired */}
          <button type="button" className='clear-button' onClick={() => {
              setSearchQuery('');
              //reload popular movies here if you want to reset to popular movies on clear, otherwise just clear the input 
             loadPopularMovies(); 
          }}>Clear Search</button>
        </form>

        {error && <div className='error-message'> {error} </div>}

        {loading? (<div className='loading'> Loading...</div>) 
        : (<div className='movies-grid'>
            {/* Map over the results directly, no extra client-side filtering needed */}
            {movies.map((movie) => (
               <MovieCard movie={movie} key={movie.id}/>
            ))}
           </div>
        )}
      </div>
    </div>
  )
}



export default Home




