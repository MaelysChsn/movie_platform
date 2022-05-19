import React, {useState} from "react";
import {useParams} from 'react-router-dom';
import {LocalReviewPost} from "../Interface/LocalReviewPost";
import usePostReview from "../Hooks/postReview.tsx";
import {ReviewInterface} from "../Interface/ResponsesInterfaces";
import {selectUser} from "../redux/userSlice";
import {useSelector} from 'react-redux';

interface ReviewFormPropsInterface {
    setNeedsUpdate: React.Dispatch<boolean>
}

export default function ReviewForm({setNeedsUpdate, id}: ReviewFormPropsInterface) {

    const [localReview, setLocalReview] = useState<LocalReviewPost>({comment: "", movie_id: id})
    const postReview = usePostReview();

    const user = useSelector(selectUser);

    const handleChange = ({target}: any) => {
        setLocalReview(prev => ({
            ...prev,
            [target.name]: target.value
        }))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (user.token != null) {
            postReview(user.token, localReview)
                .then(data => {
                    setLocalReview({comment: "", movie_id: id})
                    setNeedsUpdate(true);
                })
        }
    }

    return (
        <form className='mx-auto' style={{width:"70%"}} onSubmit={handleSubmit}>
            <h4 className='mb-3 text-center'>Envie de donner votre avis ?</h4>
            <div className="mb-3 form-floating">
                <textarea className="form-control" placeholder="Write here" id="floatingTextarea" name='comment'
                          style={{height: '100px'}} onChange={handleChange} value={localReview.comment}/>
                <label htmlFor="floatingTextarea">Comment</label>
            </div>
            <button type='submit' className='btn btn-warning w-100'>Poster </button>
        </form>
    )
}
