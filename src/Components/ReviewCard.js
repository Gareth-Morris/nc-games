import { useEffect, useState } from "react";
import { getReviewCard } from "../utils/api";
import Comments from "./Comments";
import { useParams } from "react-router-dom";
import VoteReviewArea from "./VoteReviewArea";

const ReviewCard = () => {
  const [reviewCard, setReviewCard] = useState({});
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviewCard(review_id).then((reviewCardFromApi) => {
      setReviewCard(reviewCardFromApi);
      setIsLoading(false);
    });
  }, [review_id]);

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <div>
      <p>{reviewCard.title}</p>
      <img src={reviewCard.review_img_url} alt="Review" />
      <p>{reviewCard.designer}</p>
      <p>{reviewCard.owner}</p>
      <p>{reviewCard.review_body}</p>
      <p>Number of comments: {reviewCard.comment_count}</p>
      <p>Number of votes in database: {reviewCard.votes}</p>
      <VoteReviewArea review={reviewCard} />
      <Comments review_id={review_id} />
    </div>
  );
};
export default ReviewCard;
