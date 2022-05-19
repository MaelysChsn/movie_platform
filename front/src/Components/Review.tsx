import {ReviewInterface} from "../Interface/ResponsesInterfaces";

export default function Review({review}: { review: ReviewInterface }) {
    return (
        <>
            {review !== [] ?
                <div className='bg_light rounded p-3 mb-3'>
                    <p>
                        <small>
                            <strong>Par :</strong> {review.username}
                            <br/>
                            <strong>Le :</strong> {review.date}
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
