import { useEffect, useState } from "react";
import { getReviewCard } from "../utils/api";
import Comments from "./Comments";
import { useParams, Link } from "react-router-dom";
import VoteReviewArea from "./VoteReviewArea";

const ReviewCard = () => {
  const [reviewCard, setReviewCard] = useState({});
  const { review_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    setIsError(false);
    getReviewCard(review_id)
      .then((reviewCardFromApi) => {
        setReviewCard(reviewCardFromApi);
        setCommentCount(reviewCardFromApi.comment_count);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [review_id]);

  return isError ? (
    <h2>Review Not Found</h2>
  ) : isLoading ? (
    <p>Loading</p>
  ) : (
    <div className="reviewcard">
      <div className="review-info">
        <h3 className="review-title">{reviewCard.title}</h3>
        <img src={reviewCard.review_img_url} alt="Review" className="reviews-img"/>
        <p>Game designer: {reviewCard.designer}</p>
        <p>Reviewer: {reviewCard.owner}</p>
        <p className="review-body">{reviewCard.review_body}</p>
        <VoteReviewArea review={reviewCard} />
      </div>
      <div className="comment-info">
        <h4>This review has {commentCount} comment(s):</h4>
        <Comments review_id={review_id} setCommentCount={setCommentCount} />
      </div>
    </div>
  );
};
export default ReviewCard;
