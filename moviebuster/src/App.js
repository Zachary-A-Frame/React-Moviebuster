import React, { useState, useEffect } from "react";
import MoviebusterApi from "./api"
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate,
} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Game from './Components/Game';
import Signup from './Components/Signup'
import Login from "./Components/Login"
import Header from "./Components/Navbar"

// Context
import MovieContext from './MovieContext'
import UserContext from './UserContext'

function App() {

  const [movie, setMovie] = useState({});
  const [currUser, setCurrUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    async function getMovie() {
      let randMovie = Math.floor(Math.random() * 650)
      let movie = await MoviebusterApi.getMovie(randMovie);
      setMovie(movie)
      // console.log(movie.movie)
    }
    getMovie()
  }, [])

  return (
    isLoggedIn ? (
      <div>
        <Router>
          <UserContext.Provider value={{ currUser, setCurrUser, setIsLoggedIn }}>
            <Header />
            <div className="App">

              <MovieContext.Provider value={{ movie, setMovie }}>
                <Switch>
                  <Route exact path="/" element={<Game />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Switch>
              </MovieContext.Provider>
            </div>
          </UserContext.Provider>
        </Router>
      </div>
    )
      : (
        <Router>
          <UserContext.Provider value={{ currUser, setCurrUser, setIsLoggedIn }} >
            <Switch>
              <Route exact path="/" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Switch>
          </UserContext.Provider>
        </Router>
      )
  )
}

export default App;
