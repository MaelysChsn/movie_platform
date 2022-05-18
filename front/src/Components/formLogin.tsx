import React, {useState, useEffect} from "react"
import useCookies from "../Hooks/getCookies.tsx";
import useRegister from "../Hooks/register.tsx";
import useLogin from "../Hooks/login.tsx";
import {LocalUserInterface} from "../Interface/LocalUserInterface";
import {LoginResponseInterface} from "../Interface/ResponsesInterfaces";




interface LoginFormPropsInterface {
    setLocalUser: React.Dispatch<LocalUserInterface>,
    needsLogin: boolean,
    setNeedsLogin: React.Dispatch<boolean>
}

export default function FormLogin(LoginFormPropsInterface){

  const login = useLogin();
  const register = useRegister();
  const cookies = useCookies();



  const [loggedUser, setLoggedUser] = useState<LoginResponseInterface>({
        status: 'error',
        token: "",
        email: ""
  })

  const [localUser, setLocalUser] = useState<LocalUserInterface>({email: "", password: ""})
  const [needsLogin, setNeedsLogin] = useState<boolean>(true)
  const [needsUpdate, setNeedsUpdate] = useState<boolean>(false)

  const [formInput, setFormInput] = useState<LocalUserInterface>({email: "", password: ""})
    useEffect(() => {
      console.log('cookies', cookies)
          if (Object.keys(cookies).includes('hetic_token') && Object.keys(cookies).includes('hetic_email')) {
              console.log('got cookies !', loggedUser)
              setLoggedUser(prev => ({
                  ...prev,
                  email: cookies.hetic_email,
                  token: cookies.hetic_token
              }))
          }
      }, [loggedUser])

      useEffect(() => {

            if (needsLogin && localUser.email !== '') {
                console.log('login ?')
                login(localUser.email, localUser.password)
                    .then(data => {
                      console.log(data);
                        setLoggedUser(data);
                        if(data.status !== 'error'){

                        }else{
                          alert(data.message);
                        }
                    })
            } else if (!needsLogin && localUser.email !== '') {
                console.log('register ?', localUser.email)
                register(localUser.email, localUser.password)
                    .then(data => {
                      setLoggedUser(data);
                      console.log(data);
                      if(data.status !== 'error'){
                        setNeedsLogin(true);
                        setFormInput({email: "", password: ""})
                      }else{
                        alert(data.message);
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
        <form className='mx-auto' style={{maxWidth: '350px'}} onSubmit={handleSubmit}>
            <h2 className='mb-3 text-center'>{needsLogin ? 'Please Log In' : 'Please Register'}</h2>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="FrancisHuster"
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
    )
}
