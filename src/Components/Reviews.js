import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import { Link } from "react-router-dom";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((reviewsFromApi) => {
      console.log("Got reviews");
      setReviews(reviewsFromApi);
      console.log(reviewsFromApi);
    });
  }, []);

  return (
    <div>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.title}>
              <Link to={`/reviews/${review.title}`}>
                <p>{review.title}</p>
              </Link>
              <Link to={`/reviews/${review.review_img_url}`}>
                <img src={review.review_img_url}></img>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
