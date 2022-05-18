import {LocalReviewPost} from "../Interface/LocalReviewPost";

export default function usePostReview() {
    return (token: string, review: LocalReviewPost) => {
        return fetch('http://localhost:5555/post-review.php', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: new URLSearchParams({
                comment: review.comment,
                movie_id: review.movie_id
            })
        })
            .then(res => res.json())
    }
}
