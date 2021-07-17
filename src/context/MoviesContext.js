import React, { useContext, createContext, useState, useEffect } from 'react';

export const MovieContext = createContext("")

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([])

    const getMovies = () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c062382504198a6a2cc69f4b0fcd9319`)
            .then((res) => res.json())
            .then(data => {
                setMovies(data.results)
            })
    }

    return (
        <MovieContext.Provider
            value={{
                movies,
                getMovies
            }}>
            {children}
        </MovieContext.Provider>
    )
}


