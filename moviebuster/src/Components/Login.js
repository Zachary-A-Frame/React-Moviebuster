import React, {useContext} from "react";
import { useForm } from "react-hook-form";
import "./signup.css"
import { useNavigate, NavLink } from "react-router-dom"
import MoviebusterApi from "../api.js"
import UserContext from "../UserContext"

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { setCurrUser, setIsLoggedIn } = useContext(UserContext)

    const navigate = useNavigate()

    async function getUser(data) {
        const user = await MoviebusterApi.getUser(data.username)
        if (user) {
            setCurrUser({ username: user.username, score: user.score })
        }
    }

    const onSubmit = data => {
        console.log(data);
        MoviebusterApi.login(data);
        setIsLoggedIn(true)
        getUser(data)
        navigate('/game')
    }

    return (
        <div className="signup">
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">Username</label><br />
                <input autoComplete="section-username section"{...register("username", { required: true, minLength: 4, maxLength: 25 })} /><br />
                {errors.username?.type === 'required' && <p style={{ color: "red" }}>Enter a valid username!</p>}
                {errors.username?.type === 'minLength' && <p style={{ color: "red" }}>Must be at least 4 characters!</p>}
                {errors.username?.type === 'maxLength' && <p style={{ color: "red" }}>Must be less than 25 characters!</p>}

                <label htmlFor="password">Password</label><br />
                <input type="password" autoComplete="section-password section" {...register("password", { required: true, minLength: 4, maxLength: 25 })} /><br />
                {errors.password?.type === 'required' && <p style={{ color: "red" }}>Enter a valid password!</p>}
                {errors.password?.type === 'minLength' && <p style={{ color: "red" }}>Must be at least 4 characters!</p>}
                {errors.password?.type === 'maxLength' && <p style={{ color: "red" }}>Must be less than 25 characters!</p>}
                <input type="submit" onSubmit={onSubmit} />
                <br/>
                <NavLink to="/">Need an account?</NavLink>
            </form>
        </div>
    );
}

export default Login