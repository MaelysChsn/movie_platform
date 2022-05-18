import {MovieInterface} from "../Interface/ResponsesInterfaces";
import Movies from "./Movies.tsx";

export default function MovieList({movieList}:{movieList: MovieInterface[]}) {
    return (
        <div className='container'>
            <h1 className='text-center mb-5'>Tous les films</h1>
            <div className="row justify-content-between">
                {
                    movieList.map((movies: MovieInterface) => (
                        <Movies movies={movies} key={movies.id}/>
                    ))
                }
            </div>
        </div>
    )
}
