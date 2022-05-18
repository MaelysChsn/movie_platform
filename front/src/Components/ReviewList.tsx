import {ReviewInterface} from "../Interface/ResponsesInterfaces";
import Review from "./Review.tsx";

export default function ReviewList({reviewList, id}:{reviewList: ReviewInterface[]}) {


    return (
        <div className='container'>
            <h1 className='text-center mb-5'>Les Reviews</h1>
            <div className="row justify-content-between">
                {
                    reviewList.map((review: ReviewInterface) => (
                        parseInt(id) === review.movie_id ? <Review review={review} key={review.id}/> : null
                    ))
                }
            </div>
        </div>
    )
}
