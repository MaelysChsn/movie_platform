import {MovieInterface} from "../Interface/ResponsesInterfaces";
import { Link } from "react-router-dom";

export default function Movies({movies}: { movies: MovieInterface }) {
    console.log(movies);
    return (
        <div className='col-sm bg-light rounded'>
            <img src={require(`../assets/images/films/${movies.affiche}`)} width="300px"/>
            <h3>{movies.name}</h3>
            <p>
                <small>
                    Par : {movies.creator}
                    <br/>
                    Sortie le : {movies.published}
                </small>
            </p>

            <Link to={`/movie/${movies.id}`} className="btn btn-warning" state={{ movie: movies }}>Voir plus</Link>
        </div>
    )
}
