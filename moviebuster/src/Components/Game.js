import { useContext, useState } from "react"
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom"

import MovieContext from "../MovieContext"
import UserContext from "../UserContext"
import HasAnsweredContext from "./HasAnsweredContext"
import MoviebusterApi from "../api"

import Movie from "./Movie"


const Game = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { movie } = useContext(MovieContext)
    const { currUser, setCurrUser } = useContext(UserContext)
    const [hasntAnswered, setHasAnswered] = useState(true)
    // const navigate = useNavigate()

    function givePoints(username) {
        return MoviebusterApi.grantPoints(username)
    }

    const onSubmit = data => {
        console.log("guess " + data.guess)
        console.log("actual score " + movie.actual_score)
        if (parseInt(data.guess) === movie.actual_score) {
            console.log("Successful guess: Attempting to Grant Points to " + currUser.username)
            givePoints(currUser.username)
            setCurrUser({ username: currUser.username, score: currUser.score + 10 })
            setHasAnswered(false)
        }
        setHasAnswered(false)
        // navigate("/movie")
    }

    return (
        hasntAnswered ? (
            <div>
                <h1>{movie.plot}</h1>
                <img src={movie.poster} key={movie.id + "_" + movie.title} alt={movie.title}></img>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="guess">Guess 0-100!</label><br />
                    <input type="number" autoComplete="section-guess section"{...register("guess", { required: true, minLength: 1, maxLength: 3 })} /><br />
                    {errors.guess?.type === 'maxLength' && <p style={{ color: "red" }}>Enter a valid Guess! 0-100</p>}

                    <input type="submit" />
                    <br />
                </form>
            </div>
        ) : (
            <HasAnsweredContext.Provider value={{ setHasAnswered }}>
                <Movie />
            </HasAnsweredContext.Provider>
        )
    )

}

export default Game