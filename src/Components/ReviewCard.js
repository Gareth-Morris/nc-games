import { useEffect, useState } from "react";
import { getReviewCard } from "../utils/api";
import Comments from "./Comments";
import { useParams } from "react-router-dom";
import VoteCounter from "./VoteCounter";

const ReviewCard = () => {
  const [reviewCard, setReviewCard] = useState([]);

  const { review_id } = useParams();

  console.log(review_id);

  useEffect(() => {
    getReviewCard(review_id).then((reviewCardFromApi) => {
      setReviewCard(reviewCardFromApi);
    });
  }, [review_id]);

  return (
    <div>
      <p>{reviewCard.title}</p>
      <img src={reviewCard.review_img_url} alt="Review" />
      <p>{reviewCard.designer}</p>
      <p>{reviewCard.owner}</p>
      <p>{reviewCard.review_body}</p>
      <p>{reviewCard.comment_count}</p>
      <p>{reviewCard.votes}</p>
      <VoteCounter />
      <Comments review_id={review_id} />
    </div>
  );
};

export default ReviewCard;
