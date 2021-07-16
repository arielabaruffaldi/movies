import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const MovieDetail = () => {
    const { id } = useParams();
    const [movieDetail, setMovieDetail] = useState({})

    const getMovieById = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c062382504198a6a2cc69f4b0fcd9319`)
            .then(res => res.json())
            .then(data => {
                setMovieDetail(data)
            })
    }

    useEffect(() => {
        getMovieById()
    }, [])
    
    return (
        <>
            <h2>{movieDetail.title} </h2>
            <p>{movieDetail.overview}</p>
        </>
    )
}

export default MovieDetail;