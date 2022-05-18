import {ReviewInterface} from "../Interface/ResponsesInterfaces";

export default function getReview() {
    return (): Promise<ReviewInterface[]> => {
        return fetch("http://localhost:5555/review.php")
            .then(res => res.json())
    }
}
