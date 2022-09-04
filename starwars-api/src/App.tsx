import React, { Fragment, useCallback, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import IMovie from './interfaces/IMovie';
import MovieList from './components/MovieList/MovieList';
import { isExpressionStatement } from 'typescript';
import AddMovie from './components/AddMovie/AddMovie';

function App() {

  const [starWarsFilms, setStarWarsFilms] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setError(null);
    setIsLoading(true);

    try{
      const response = await fetch('https://react-http-2092a-default-rtdb.firebaseio.com/movies.json');

      if(!response.ok){
        throw new Error('Failed to load your movies, an error was encountered.')
      }

      const jsonData = await response.json();

      const loadedMovies: IMovie[] = [];
      console.log(jsonData);

      Object.entries(jsonData).forEach((entry) => {
        const [key, value]: [string, any] = entry;
        loadedMovies.push({
          id: key,
          title: value.title,
          openingText: value.openingText,
          releaseDate: new Date(value.releaseDate)
        } as IMovie);
      });

      setStarWarsFilms(loadedMovies);
      setIsLoading(false);

    } catch(exception: any){
      setError(exception.message);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie: IMovie) {
    try{
      const response = await fetch('https://react-http-2092a-default-rtdb.firebaseio.com/movies.json',
      {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json'
        }
      }as RequestInit);

      const data = response.json();
      console.log(data);
      fetchMoviesHandler();

    }catch(exception: any){
      setError(exception.message);
    }
  }

  return (
    <Fragment>
     <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>

      <section>
        {!isLoading && starWarsFilms.length > 0 && <MovieList movies={starWarsFilms} />}
        {!isLoading && starWarsFilms.length === 0 && <p>No films found...</p>}
        {isLoading && <p>Loading your films...</p>}
        {!isLoading && error && <p>{error}</p>};
      </section>
    </Fragment>
  );
}

export default App;
