import {MovieInterface} from "../Interface/ResponsesInterfaces";

export default function getMovies() {
    return (): Promise<MovieInterface[]> => {
        return fetch("http://localhost:5555")
            .then(res => res.json())
    }
}
