import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { useMovieContext } from '../../context/MoviesContext';
const MovieList = () => {
    const { movies, getMovies } = useMovieContext()

    useEffect(() => {
        getMovies()
    }, [])

    console.log("movies", movies)

    return (
        <section>
            {movies.map((movie) => {
                return (
                    <Link key={movie.id} to={`movie/${movie.id}`}>
                        <div>
                            <h2>{movie.title}</h2>
                        </div>
                    </Link>
                )
            })}
        </section>
    )
}

export default MovieList;