import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

const MovieList = ({ movies }) => {
  
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