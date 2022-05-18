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
import useCookies from "../Hooks/getCookies.tsx";


interface LoginFormPropsInterface {
    setLocalUser: React.Dispatch<LocalUserInterface>
}


export default function MoviesSingle({}) {

    const {id} = useParams();
    const location = useLocation();
    const { movie } = location.state;

    const [loggedUser, setLoggedUser] = useState<LoginResponseInterface>({
           status: 'error',
           token: "",
           email: "admin@gmail.com"
     })
    const cookies = useCookies();

    const getReviewList = getReview();
    const [reviewList, setReviewList] = useState<ReviewInterface[]>([]);
    const [needsUpdate, setNeedsUpdate] = useState<boolean>(false);

    useEffect(() => {
          if (Object.keys(cookies).includes('hetic_token') && Object.keys(cookies).includes('hetic_email')) {
              console.log('got cookies !', loggedUser)
              setLoggedUser(prev => ({
                  ...prev,
                  email: cookies.hetic_email,
                  token: cookies.hetic_token
              }))
          }
      }, [])

    useEffect(() => {
      getReviewList().then(data => {
          setReviewList(data)
          setNeedsUpdate(false)
        })
    }, [needsUpdate])




    return (
        <>
            <div className="row justify-content-between">
                <div className='col-sm bg-light rounded'>
                    <img src={require(`../assets/images/films/${movie.affiche}`)} width="300px"/>
                    <h3>{movie.name}</h3>
                    <p>
                        <small>
                            Par : {movie.creator}
                            <br/>
                            Sortie le :{movie.date}
                        </small>
                    </p>
                </div>

                {
                    loggedUser.token !== "" ? <ReviewForm loggedUser={loggedUser} setNeedsUpdate={setNeedsUpdate} id={id}/> : "connecter vous pour donner votre avis !!"
                }
            </div>



            <div className="row justify-content-between">
                <ReviewList reviewList={reviewList} id={id}/>
            </div>
        </>

    )
}
