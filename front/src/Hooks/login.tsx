import {LoginResponseInterface} from "../Interface/ResponsesInterfaces";
import axios from 'axios';
import {Navigate} from 'react-router-dom';

export default function useLogin() {

    const axiosInstance = axios.create({
        baseURL: "http://localhost:5555/",
        headers: {
          'Authorization': 'Bearer lkfdgldfgljgf'
        },
        withCredentials: true,
        auth: {
          email: 'admin@gmail.com',
          password: 'password'
        }
      });
    return (email: string, password: string): Promise<LoginResponseInterface> => {
        return axios.get('http://localhost:5555/login.php', {
            method: 'GET',
            mode: 'cors',
            credentials: "include",
            headers: {
                Authorization: `Basic ${btoa(email + ':' + password)}`
            }
        })
            .then(res => res.data)
    }
}
