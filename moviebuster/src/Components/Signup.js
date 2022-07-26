import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import "./signup.css"
import { useNavigate, NavLink } from "react-router-dom"
import MoviebusterApi from "../api.js"
import UserContext from "../UserContext"

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { setCurrUser, setIsLoggedIn } = useContext(UserContext)

    const navigate = useNavigate()

    const onSubmit = data => {
        console.log(data);
        data.score = 0;
        MoviebusterApi.register(data);
        setIsLoggedIn(true)
        setCurrUser({username: data.username, score: 0})
        navigate('/game')
    }

    return (
        <div className="signup">
            <h1>React Moviebuster Demo Signup!</h1>
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

                <label htmlFor="email">email</label><br />
                <input autoComplete="section-email section"{...register("email", { required: true, minLength: 2, maxLength: 50 })} /><br />
                {errors.email?.type === 'required' && <p style={{ color: "red" }}>Enter a valid email!</p>}
                {errors.email?.type === 'minLength' && <p style={{ color: "red" }}>Must be at least 2 characters!</p>}
                {errors.email?.type === 'maxLength' && <p style={{ color: "red" }}>Must be less than 50 characters!</p>}

                <input type="submit" onSubmit={onSubmit} />
                <br/>
                <NavLink to="/login">Already have an account?</NavLink>
            </form>
        </div>
    );
}

export default Signup