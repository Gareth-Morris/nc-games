import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://nc-games-emporium-example.herokuapp.com/api",
});

export const getCategories = () => {
  return gamesApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const getReviews = (category_name) => {
  return gamesApi
    .get("/reviews", { params: { category: category_name } })
    .then((res) => {
      return res.data.reviews;
    });
};

export const getReviewCard = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};

export const getComments = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const postComments = (review_id) => {
  return gamesApi
    .post(`/reviews/${review_id}/comments`, "New Comment")
    .then((res) => {
      return res.data.comments;
    });
};

export const incReviewVote = (review_id, inc_votes) => {
  return gamesApi.patch(`/reviews/${review_id}`, { inc_votes }).then((res) => {
    return res.data.review;
  });
};
