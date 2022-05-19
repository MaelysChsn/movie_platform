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




interface LoginFormPropsInterface {
    setLocalUser: React.Dispatch<LocalUserInterface>,
}

export default function Router({}){

  const [theme, setTheme] = useState("light");

   const cookies = useCookies();

   const [loggedUser, setLoggedUser] = useState<LoginResponseInterface>({
         status: 'error',
         token: "",
         email: ""
   })

  useEffect(() => {
        if (Object.keys(cookies).includes('hetic_token') && Object.keys(cookies).includes('hetic_email')) {
            console.log('got cookies !', loggedUser)
            setLoggedUser(prev => ({
                ...prev,
                email: cookies.hetic_email,
                token: cookies.hetic_token
            }))
        }
    }, [])

  return(
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <CookiesProvider>
        <BrowserRouter>
            <Nav setTheme={setTheme} theme={theme} setLoggedUser={setLoggedUser} loggedUser={loggedUser}/>
            <Routes>
              <Route path="/" element={<App theme={theme}/>} />
              <Route path="/movie/:id" element={<MoviesSingle setLoggedUser={setLoggedUser} loggedUser={loggedUser} theme={theme}/>} />
              <Route path="/login" element={<Login setLoggedUser={setLoggedUser} theme={theme}/>} />
            </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </ThemeProvider>
  )
}
