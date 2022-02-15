import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import { Link, useParams } from "react-router-dom";
import SortArea from "../Components/SortArea";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { category_name } = useParams();
  const [localSort_by, setLocalSort_by] = useState("created_at");
  const [localOrder, setLocalOrder] = useState("ASC");

  useEffect(() => {
    getReviews({
      category: category_name,
      sort_by: localSort_by,
      order: localOrder,
    }).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
    });
  }, [category_name, localOrder, localSort_by]);

  return (
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
