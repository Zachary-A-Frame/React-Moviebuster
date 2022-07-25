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

    // const handleNav = e => {
    //     e.preventDefault()
    //     navigate("/")
    // }
    // There is a lot of reused code down below. I could absolutely make this shorter, in the interest of time and flexibility, I'm not going to worry about it. We could use state to configure this to be less reused code, but in our case it isn't particularly necessary, as we only have four form fields. We could also check which error type we have, etc, there's lots of things we can do to shorten this.

    return (
        <div className="signup">
            <h1>Signup!</h1>
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