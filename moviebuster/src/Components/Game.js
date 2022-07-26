import { useContext, useState } from "react"
import { useForm } from "react-hook-form";

import MovieContext from "../MovieContext"
import UserContext from "../UserContext"
import HasAnsweredContext from "./HasAnsweredContext"
import MoviebusterApi from "../api"

import Movie from "./Movie"

import "./game.css"

const Game = () => {
    // Form initialization from react-hook-forms
    const { register, formState: { errors }, handleSubmit } = useForm();

    // Context initialization
    const { movie } = useContext(MovieContext)
    const { currUser, setCurrUser } = useContext(UserContext)

    // Setting our state. State handles which component is being rendered in our case.If hasntAnswered is true we render the game, once the player answers we render our Movie component. We reinitiate our movie component with a fresh movie every time the page is loaded.
    const [hasntAnswered, setHasAnswered] = useState(true)
    const [userGuess, setUserGuess] = useState(null)
    const [correctAnswer, setCorrectAnswer] = useState("green")

    const onSubmit = data => {
        // Debugging console logs
        // console.log("guess " + data.guess)
        // console.log("actual score " + movie.actual_score)

        // Checks to see if the guess is within plus or minus ten of the actual rotten tomatoes score of the current movie. If it is, we update our state by just sending in a new object with our score updated. Then, we set our hasntAnswered to false so we can see our Movie component. Whether they get it right or not we are moved to the Movie page.
        if (parseInt(data.guess) === movie.actual_score
            || ((parseInt(data.guess) >= (movie.actual_score - 10))
                && (parseInt(data.guess) <= (movie.actual_score + 10)))) {
            MoviebusterApi.grantPoints(currUser.username)
            setCurrUser({ username: currUser.username, score: currUser.score + 10 })
            setHasAnswered(false)
            setCorrectAnswer("green")

        } else {
            setCorrectAnswer("red")
        }
        setHasAnswered(false)
        setUserGuess(data.guess)
    }

    return (
        hasntAnswered ? (
            <div>
                <h1 className="game-plot-text">{movie.plot}</h1>
                {/* <img src={movie.poster} key={movie.id + "_" + movie.title} alt={movie.title}></img> */}
                <form id="myInput" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="guess">Guess 0-100!</label><br />
                    <input type="number" autoComplete="section-guess section"{...register("guess", { required: true, minLength: 1, maxLength: 3 })} /><br />
                    {errors.guess?.type === 'maxLength' && <p style={{ color: "red" }}>Enter a valid Guess! 0-100</p>}

                    <input type="submit" />
                    <br />
                </form>
            </div>
        ) : (
            <HasAnsweredContext.Provider value={{ setHasAnswered }}>
                    <Movie guessedScore={userGuess} correct={correctAnswer} />
            </HasAnsweredContext.Provider>
        )
    )
}

export default Game