import {LoginResponseInterface} from "../Interface/ResponsesInterfaces";

export default function useRegister() {
    return (email: string, password: string, username: string): Promise<LoginResponseInterface> => {
        return fetch('http://localhost:5555/register.php', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            body: new URLSearchParams({
                email: email,
                password: password,
                username: username
            })
        })
            .then(res => res.json())
    }
}
