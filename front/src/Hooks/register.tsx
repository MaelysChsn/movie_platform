import {LoginResponseInterface} from "../Interface/ResponsesInterfaces";

export default function useRegister() {
    return (email: string, password: string): Promise<LoginResponseInterface> => {
        return fetch('http://localhost:5555/register.php', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            body: new URLSearchParams({
                email: email,
                password: password
            })
        })
            .then(res => res.json())
    }
}
