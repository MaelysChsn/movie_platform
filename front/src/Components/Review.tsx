import {ReviewInterface} from "../Interface/ResponsesInterfaces";

export default function Review({review}: { review: ReviewInterface }) {
    console.log(review);
    
    return (
        <>
            {review !== [] ?
                <div className='bg-light rounded p-3 mb-3'>
                    <p>
                        <small>
                            Par : {review.user_id}
                            <br/>
                            Le : {review.date}
                        </small>
                    </p>
                    <p>{review.comment}</p>
                </div>
                :
                "Aucun avis n'a encore été donnée pour ce film !"
            }
        </>

    )
}
