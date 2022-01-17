import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import { Link, useParams } from "react-router-dom";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { category_name } = useParams();
  // const urlSearchParams = new URLSearchParams(window.location.search);
  // const queries = Object.fromEntries(urlSearchParams.entries());

  useEffect(() => {
    // console.log(category_name, "QUERY");
    getReviews(category_name).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, [category_name]);

  return (
    <div>
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <Link to={`/reviews/${review.review_id}`}>
                <p>{review.title}</p>
              </Link>
              <Link to={`/reviews/${review.review_id}`}>
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
