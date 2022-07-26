import { useContext } from "react"
import { NavLink } from "react-router-dom"
import MoviebusterApi from "../api"
import HasAnsweredContext from "./HasAnsweredContext"
import "./movie.css"

import MovieContext from "../MovieContext"

const Movie = (props) => {
    const { movie, setMovie } = useContext(MovieContext)
    const { setHasAnswered } = useContext(HasAnsweredContext)

    const onClick = () => {
        // console.log("Hello from movie.js")
        async function getMovie() {
            let randMovie = Math.floor(Math.random() * 650)
            let movie = await MoviebusterApi.getMovie(randMovie);
            setMovie(movie)
            setHasAnswered(true)
        }
        getMovie()
    }

    return (
        <div>
            <img className="poster" src={movie.poster} key={movie.id + "_" + movie.title} alt={movie.title}></img>
            <div className="details">
                <h1>{movie.title}</h1>
                <p>{movie.plot}</p>
                <p style={{ color: props.correct }}>You guessed: {props.guessedScore}! </p>
                <p>Rotten Tomatoes score: {movie.actual_score}</p>
                <NavLink to="/" onClick={onClick}>Play again?!</NavLink>
            </div>
        </div>
    )

}

export default Movie