import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import { Link, useParams } from "react-router-dom";
import SortArea from "../Components/SortArea";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { category_name } = useParams();
  const [localSort_by, setLocalSort_by] = useState("created_at");
  const [localOrder, setLocalOrder] = useState("ASC");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
    getReviews({
      category: category_name,
      sort_by: localSort_by,
      order: localOrder,
    })
      .then((reviewsFromApi) => {
        setReviews(reviewsFromApi);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [category_name, localOrder, localSort_by]);

  return isError ? (
    <h2>Category Not Found</h2>
  ) : isLoading ? (
    <p>Loading</p>
  ) : (
    <div>
      <SortArea
        order={localOrder}
        setOrder={setLocalOrder}
        sort_by={localSort_by}
        setSort_by={setLocalSort_by}
      />
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
