import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://nc-games-emporium-example.herokuapp.com/api",
});

export const getCategories = () => {
  return gamesApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const getReviews = (params) => {
  return gamesApi.get("/reviews").then((res) => {
    return res.data.reviews;
  });
};

export const getReviewCard = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};

export const getComments = () => {
  return gamesApi.get("/reviews/comments").then((res) => {
    return res.data.comments;
  });
};
