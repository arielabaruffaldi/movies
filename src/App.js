import React, { useState, useEffect } from 'react'

import './App.css';
import MovieList from './components/MovieList/MovieList';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import MovieDetail from './components/MovieDetail/MovieDetail';
import { MovieProvider } from "./context/MoviesContext"
//https://api.themoviedb.org/3/discover/movie?api_key=c062382504198a6a2cc69f4b0fcd9319



function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MovieList></MovieList>
          </Route>
          <Route exact path="/movie/:id">
            <MovieDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;
