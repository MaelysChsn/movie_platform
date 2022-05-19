import {ReviewInterface} from "../Interface/ResponsesInterfaces";
import Review from "./Review.tsx";

export default function ReviewList({reviewList, id}:{reviewList: ReviewInterface[]}) {

    return (
        <div className='container'>
            <h3 className='mb-4'>Les Reviews</h3>
            <div className="row justify-content-between">
                {
                    reviewList.map((review: ReviewInterface) => (
                        review.movie_id === parseInt(id) ? <Review review={review} key={review.id}/> : " "
                    ))
                }
            </div>
        </div>
    )
}
