import { useEffect, useState } from "react";
import { getReviewCard } from "../utils/api";
import { Link } from "react-router-dom";

const ReviewCard = () => {
  const [reviewCard, setReviewCard] = useState([]);

  useEffect(() => {
    getReviewCard().then((reviewCardFromApi) => {
      console.log("Got reviews");
      setReviewCard(reviewCardFromApi);
      console.log(reviewCardFromApi);
    });
  }, []);

  return (
    <div>
      <ul>
        {reviewCard.map((review) => {
          return (
            <li key={review.title}>
              <Link to={`/reviews/${review.title}`}>
                <p>{review.title}</p>
              </Link>
              <Link to={`/reviews/${review.review_img_url}`}>
                <img src={review.review_img_url}></img>
              </Link>
              <Link to={`/reviews/${review.designer}`}>
                <p>{review.designer}</p>
              </Link>
              <Link to={`/reviews/${review.owner}`}>
                <p>{review.owner}</p>
              </Link>
              <Link to={`/reviews/${review.review_body}`}>
                <p>{review.review_body}</p>
              </Link>
              <Link to={`/reviews/${review.comment_count}`}>
                <p>{review.comment_count}</p>
              </Link>
              <Link to={`/reviews/${review.votes}`}>
                <p>{review.votes}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReviewCard;
