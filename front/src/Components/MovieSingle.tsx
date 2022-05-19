import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {ReviewInterface} from "../Interface/ResponsesInterfaces";
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";
import ReviewForm from './ReviewForm.tsx'
import ReviewList from "./ReviewList.tsx";
import getReview from "../Hooks/getReview.tsx";
import {LocalUserInterface} from "../Interface/LocalUserInterface";
import {LoginResponseInterface} from "../Interface/ResponsesInterfaces";



interface LoginFormPropsInterface {
    setLocalUser: React.Dispatch<LocalUserInterface>
}


export default function MoviesSingle({loggedUser, setLoggedUser}) {

    const {id} = useParams();
    const location = useLocation();
    const { movie } = location.state;



    const getReviewList = getReview();
    const [reviewList, setReviewList] = useState<ReviewInterface[]>([]);
    const [needsUpdate, setNeedsUpdate] = useState<boolean>(false);


    useEffect(() => {
      getReviewList().then(data => {
          setReviewList(data)
          setNeedsUpdate(false)
        })
    }, [needsUpdate])

    console.log('movie', movie);




    return (
        <div className="c-container">
            <div className="row justify-content-between">
                <div className='col-sm rounded c-movie'>
                    <img src={require(`../assets/images/films/${movie.affiche}`)} width="300px"/>
                    <div>
                      <h3>{movie.name}</h3>
                      <p>
                          <small>
                              Par : {movie.creator}
                              <br/>
                              Sortie le :{movie.date}
                          </small>
                      </p>
                      <p>{movie.description}</p>
                    </div>
                </div>

                {
                    loggedUser.token !== "" ? <ReviewForm loggedUser={loggedUser} setNeedsUpdate={setNeedsUpdate} id={id}/> : "connecter vous pour donner votre avis !!"
                }
            </div>



            <div className="row justify-content-between">
                <ReviewList reviewList={reviewList} id={id}/>
            </div>
        </div>

    )
}
