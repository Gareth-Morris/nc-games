import { useState } from "react";
import { postComment } from "../utils/api";
import { useContext } from "react";
import { UserContext } from "../Contexts/User";

const PostComments = ({ review_id, setComments, setCommentCount }) => {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");

  const handlePostCommentChange = (event) => {
    const { value } = event.target;
    setNewComment(value);
  };

  const handlePostCommentSubmit = (event) => {
    console.log("posting somat");
    event.preventDefault();
    if (newComment.length > 0) {
      console.log("User is", user);
      console.log(newComment);
      postComment(review_id, user, newComment)
        .then((postedComment) => {
          setNewComment("");
          setComments((currComments) => [postedComment, ...currComments]);
          setCommentCount((currCommentCount) => Number(currCommentCount) + 1);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <form onSubmit={handlePostCommentSubmit} id="Form">
      <label>
        Post your comment here:
        <input
          onChange={handlePostCommentChange}
          value={newComment}
          type="text"
        />
      </label>
      <input type="submit" value="Post your comment" />
    </form>
  );
};

export default PostComments;
