import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import Nav from './nav'
import App from './App.tsx'
import Login from './Components/formLogin.tsx'
import MoviesSingle from './Components/MovieSingle.tsx'
import SignIn from './Components/formLogin.tsx'
import {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme, GlobalStyles} from './theme.js';
import useCookies from "./Hooks/getCookies.tsx";
import {LocalUserInterface} from "./Interface/LocalUserInterface.tsx";
import {LoginResponseInterface} from "./Interface/ResponsesInterfaces.tsx";
import {useDispatch} from "react-redux";
import {login} from "./redux/userSlice";
import {selectUser} from "./redux/userSlice";
import {useSelector} from 'react-redux';



interface LoginFormPropsInterface {
    setLocalUser: React.Dispatch<LocalUserInterface>,
}

export default function Router({}){

  const [theme, setTheme] = useState("light");

   const cookies = useCookies();
   const dispatch = useDispatch();

   const user = useSelector(selectUser);
   console.log('user', user);



  return(

      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <CookiesProvider>
          <BrowserRouter>
              <Nav setTheme={setTheme} theme={theme}/>
              <Routes>
                <Route path="/" element={<App theme={theme}/>} />
                <Route path="/movie/:id" element={<MoviesSingle theme={theme}/>} />
                <Route path="/login" element={<Login theme={theme}/>} />
              </Routes>
          </BrowserRouter>
        </CookiesProvider>
      </ThemeProvider>
  )
}
