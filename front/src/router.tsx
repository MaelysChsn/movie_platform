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
   const [update, setUpdate] = useState<boolean>(false)

   const user = useSelector(selectUser);

   useEffect(() => {
       if (Object.keys(cookies).includes('hetic_token') && Object.keys(cookies).includes('hetic_email')) {
           console.log('got cookies !')
           dispatch(login({
             email: cookies.hetic_email,
             token: cookies.hetic_token,
           }));
       }
     }, [update])

  return(

      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <CookiesProvider>
          <BrowserRouter>
              <Nav setTheme={setTheme} theme={theme} setUpdate={setUpdate}/>
              <Routes>
                <Route path="/" element={<App theme={theme}/>} />
                <Route path="/movie/:id" element={<MoviesSingle theme={theme}/>} />
                <Route path="/login" element={<Login theme={theme} setUpdate={setUpdate}/> } />
              </Routes>
          </BrowserRouter>
        </CookiesProvider>
      </ThemeProvider>
  )
}
