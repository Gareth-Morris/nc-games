import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://nc-games-emporium-example.herokuapp.com/api",
});

export const getCategories = () => {
  return gamesApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const getReviews = () => {
  return gamesApi.get("/reviews").then((res) => {
    return res.data.reviews;
  });
};

export const getReviewCard = () => {
  return gamesApi.get("/reviews").then((res) => {
    return res.data.reviews;
  });
};

export const getComments = () => {
  return gamesApi.get("/reviews/comments").then((res) => {
    return res.data.comments;
  });
};
