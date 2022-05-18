import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './nav'
import App from './App.tsx'
import Login from './Components/formLogin.tsx'
import MoviesSingle from './Components/MovieSingle.tsx'
import SignIn from './Components/formLogin.tsx'
import {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme, GlobalStyles} from './theme.js';


export default function Router({}){

  const [theme, setTheme] = useState("light");

  return(
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BrowserRouter>
          <Nav setTheme={setTheme} theme={theme}/>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/movie/:id" element={<MoviesSingle />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signIn" element={<SignIn />} />
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
