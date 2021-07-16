import React, { useState, useEffect } from 'react'

import './App.css';
import MovieList from './components/MovieList/MovieList';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import MovieDetail from './components/MovieDetail/MovieDetail';

//https://api.themoviedb.org/3/discover/movie?api_key=c062382504198a6a2cc69f4b0fcd9319



function App() {
  const [movies, setMovies] = useState([])

  const getMovies = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c062382504198a6a2cc69f4b0fcd9319`)
      .then((res) => res.json())
      .then(data => {
        setMovies(data.results)
      })
  }
  console.log(movies)
  useEffect(() => {
    getMovies()
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MovieList movies={movies}></MovieList>
        </Route>
        <Route exact path="/movie/:id">
          <MovieDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
