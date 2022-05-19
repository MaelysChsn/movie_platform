import {MovieInterface} from "../Interface/ResponsesInterfaces";
import { Link } from "react-router-dom";

export default function Movies({movies}: { movies: MovieInterface }) {
    return (
        <div className='col-sm bg_light rounded'>
            <img src={require(`../assets/images/films/${movies.affiche}`)} width="300px"/>

            <h3 style={{marginTop:"20px"}}>{movies.name}</h3>
            <p>
                <small>
                    <strong>Par :</strong> {movies.creator}
                    <br/>
                    <strong>Sortie le :</strong> {movies.published}
                </small>
            </p>

            <Link to={`/movie/${movies.id}`} className="btn btn-warning" state={{ movie: movies }}>Voir plus</Link>
        </div>
    )
}
