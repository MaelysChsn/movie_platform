import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {ReviewInterface} from "../Interface/ResponsesInterfaces";
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";
import ReviewForm from './ReviewForm.tsx'
import ReviewList from "./ReviewList.tsx";
import getReview from "../Hooks/getReview.tsx";
import {AiFillStar} from 'react-icons/ai';
import {selectUser} from "../redux/userSlice";
import {useSelector} from 'react-redux';




export default function MoviesSingle({theme}) {

    const {id} = useParams();
    const location = useLocation();
    const { movie } = location.state;

    const user = useSelector(selectUser);

    const getReviewList = getReview();
    const [reviewList, setReviewList] = useState<ReviewInterface[]>([]);
    const [needsUpdate, setNeedsUpdate] = useState<boolean>(false);


    useEffect(() => {
      getReviewList().then(data => {
          setReviewList(data)
          setNeedsUpdate(false)
        })
    }, [needsUpdate])





    return (
        <div className={`c-container ${theme}`}>
            <div className="row justify-content-between">
                <div className='col-sm rounded c-movie'>
                    <img src={require(`../assets/images/films/${movie.affiche}`)} width="300px"/>
                    <div>
                      <h3>{movie.name}</h3>
                      <p>
                          <small>
                              <strong>Par</strong> : {movie.creator}
                              <br/>
                              <strong>Sortie le:</strong> {movie.published}
                          </small>
                      </p>
                      <p>{movie.description}</p>
                      <br/>
                      <div>
                        <h5>La note des spectateurs :</h5>
                        <div>
                           <span style={{marginRight:"10px"}}>
                               {
                                [...Array(movie.stars)].map((x, i) =>{
                                    return(
                                        <AiFillStar style={{ color: '#ffc107'}}/>
                                )})

                                }
                            </span>
                           <span>{movie.stars}/5</span>
                         </div>
                         <br/>
                         <button className="btn btn-danger">Voir le film</button>

                      </div>
                    </div>
                </div>


            </div>



            <div className="c-review">
                <ReviewList reviewList={reviewList} id={id}/>
                {
                    user ? <ReviewForm loggedUser={loggedUser} setNeedsUpdate={setNeedsUpdate} id={id}/> : <div className="not-logged"><Link to='/login'>Connectez-vous</Link> pour donner votre avis !!"</div>
                }
            </div>
        </div>

    )
}
