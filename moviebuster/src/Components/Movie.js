import { useContext } from "react"
import { NavLink } from "react-router-dom"
import MoviebusterApi from "../api"
import HasAnsweredContext from "./HasAnsweredContext"

import MovieContext from "../MovieContext"

const Movie = () => {
    const { movie, setMovie } = useContext(MovieContext)
    const { setHasAnswered } = useContext(HasAnsweredContext)

    const onClick = () => {
        // console.log("Hello from movie.js")
        async function getMovie() {
            let randMovie = Math.floor(Math.random() * 650)
            let movie = await MoviebusterApi.getMovie(randMovie);
            setMovie(movie)
            console.log(movie.movie)
            setHasAnswered(true)
        }
        getMovie()
    }
    return (
        <div>
            <h1>{movie.title}</h1>
            <img src={movie.poster} key={movie.id + "_" + movie.title} alt={movie.title}></img>
            <p>{movie.plot}</p>
            <p>Rotten Tomatoes score: {movie.actual_score}</p>
            <NavLink to="/" onClick={onClick}>Play again?!</NavLink>
        </div>
    )

}

export default Movie