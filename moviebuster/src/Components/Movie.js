import { useContext } from "react"
// import { useNavigate } from "react-router-dom"

import MovieContext from "../MovieContext"

const Movie = () => {
    const { movie } = useContext(MovieContext)

    // const onSubmit = data => {
    //     console.log(parseInt(data.guess))
    //     console.log(movie.actual_score)
    //     if (parseInt(data.guess) === movie.actual_score) {
    //         console.log("Yes")
    //     }
    // }

    return (
        <div>
            <h1>{movie.title}</h1>
            <img src={movie.poster} key={movie.id + "_" + movie.title} alt={movie.title}></img>
            <p>{movie.plot}</p>
            <p>Rotten Tomatoes score: {movie.actual_score}</p>

        </div>
    )

}

export default Movie