import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import IMovie from './interfaces/IMovie';
import MovieList from './components/MovieList/MovieList';

function App() {

  const DUMMY_MOVIES: IMovie[] = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: new Date('2021-05-18'),
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'This is the second opening text of the movie',
      releaseDate: new Date('2021-05-19'),
    },
  ];

  return (
    <Fragment>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MovieList movies={DUMMY_MOVIES} />
      </section>
    </Fragment>
  );
}

export default App;
