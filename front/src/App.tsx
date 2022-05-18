import {useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';
import {MovieInterface} from "./Interface/ResponsesInterfaces";
import {LocalUserInterface} from "./Interface/LocalUserInterface";
import LoginForm from "./Components/LoginForm";

import MovieList from "./Components/MoviesList.tsx";

import useRegister from "./Hooks/useRegister";
import getMovies from "./Hooks/getMovies.tsx";

import useGetCookies from "./Hooks/useGetCookies";
import useEraseCookie from "./Hooks/useEraseCookie";

export default function App() {

  const getMovieList = getMovies();


  const [movieList, setMovieList] = useState<MovieInterface[]>([]);
  const [needsUpdate, setNeedsUpdate] = useState<boolean>(false);

  useEffect(() => {
    getMovieList().then(data => {
        setMovieList(data)
        setNeedsUpdate(false)
      })

  }, [needsUpdate])


  return (
    <div className="App">

      <MovieList movieList={movieList}/>
    </div>
  );
}
