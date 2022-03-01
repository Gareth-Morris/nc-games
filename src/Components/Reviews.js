import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import { Link, useParams } from "react-router-dom";
import SortArea from "../Components/SortArea";
import NavBar from "./NavBar";
import PageButtons from "./PageButtons";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { category_name } = useParams();
  const [localSort_by, setLocalSort_by] = useState("created_at");
  const [localOrder, setLocalOrder] = useState("ASC");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const pageLength = 10;

  useEffect(() => {
    setIsError(false);
    getReviews({
      category: category_name,
      sort_by: localSort_by,
      order: localOrder,
      limit: pageLength,
      p: page * pageLength,
    })
      .then((reviewsFromApi) => {
        console.log(reviewsFromApi);
        setReviews(reviewsFromApi);
        setIsLoading(false);
        setTotalReviews(reviewsFromApi[0].total_count);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [category_name, localOrder, localSort_by, page]);

  return isError ? (
    <h2>Category Not Found</h2>
  ) : isLoading ? (
    <p>Loading</p>
  ) : (
    <div>
      <NavBar />
      <SortArea
        order={localOrder}
        setOrder={setLocalOrder}
        sort_by={localSort_by}
        setSort_by={setLocalSort_by}
      />
      <ul className="reviews">
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <Link to={`/reviews/${review.review_id}`}>
                <h3>{review.title}</h3>
              </Link>
              <Link to={`/reviews/${review.review_id}`}>
                <img src={review.review_img_url}></img>
              </Link>
            </li>
          );
        })}
      </ul>
      <PageButtons
        page={page}
        setPage={setPage}
        pageLength={pageLength}
        totalCount={totalReviews}
      />
    </div>
  );
};

export default Reviews;
