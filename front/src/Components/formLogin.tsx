import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import useRegister from "../Hooks/register.tsx";
import useLogin from "../Hooks/login.tsx";
import {LocalUserInterface} from "../Interface/LocalUserInterface";
import {LoginResponseInterface} from "../Interface/ResponsesInterfaces";
import { useCookies } from 'react-cookie';
import {useDispatch} from "react-redux";
import {login} from "./redux/userSlice";


interface LoginFormPropsInterface {
    setLocalUser: React.Dispatch<LocalUserInterface>,
    needsLogin: boolean,
    setNeedsLogin: React.Dispatch<boolean>
}

export default function FormLogin({setUpdate}: LoginFormPropsInterface){

  const login = useLogin();
  const register = useRegister();
  const [cookie, setCookie] = useCookies(['hetic_email', 'hetic_token']);

  const navigate = useNavigate();
  const cookies = useCookies();
  const dispatch = useDispatch();

  const [localUser, setLocalUser] = useState<LocalUserInterface>({email: "", password: "", username: ""})
  const [needsLogin, setNeedsLogin] = useState<boolean>(true)
  const [needsUpdate, setNeedsUpdate] = useState<boolean>(false)

  const [formInput, setFormInput] = useState<LocalUserInterface>({email: "", password: "", username: ""})

  const handleCookies = (email, token) => {
    setCookie('hetic_email', email, { path: '/' });
    setCookie('hetic_token', token, { path: '/' });
  };

  useEffect(() => {
        if (needsLogin && localUser.email !== '') {
            console.log('login ?', localUser.email);
            login(localUser.email, localUser.password, localUser.username)
                .then(data => {
                    if(data.status !== 'error'){
                      handleCookies(data.email, data.token);
                      setUpdate(true);
                      navigate('/');
                    }else{
                      alert(data.message);
                    }
                })
        } else if (!needsLogin && localUser.email !== '') {
            console.log('register ?', localUser.username)
            register(localUser.email, localUser.password, localUser.username)
                .then(data => {
                  if(data.status !== 'error'){
                    setNeedsLogin(true);
                    setFormInput({email: "", password: "", username: ""})
                  }else{
                    console.log(data);
                  }
                })
        }
    }, [localUser])

    const handleChange = ({target}: any) => {
        setFormInput(prev => ({
            ...prev,
            [target.name]: target.value
        }))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLocalUser(formInput);
    }


    return (
        <div className="c-container">
            <form className='mx-auto' style={{maxWidth: '350px'}} onSubmit={handleSubmit}>
                <h2 className='mb-3 text-center'>{needsLogin ? 'Please Log In' : 'Please Register'}</h2>
                {
                    !needsLogin ?
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="mama"
                               name='username' onChange={handleChange} value={formInput.username}/>
                        <label htmlFor="floatingInput">Username</label>
                    </div>
                    :
                    null
                }

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="mama@gmail.com"
                           name='email' onChange={handleChange} value={formInput.email}/>
                    <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="mb-3 form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                           name='password' onChange={handleChange} value={formInput.password}/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button type='submit' className='btn btn-primary w-100'>{needsLogin ? 'Login' : 'Register'}</button>
                <button className='btn btn-warning mt-3 w-100'
                        onClick={() => setNeedsLogin(!needsLogin)}>{needsLogin ? 'Register' : 'Login'} instead ?</button>
            </form>
        </div>
    )
}
