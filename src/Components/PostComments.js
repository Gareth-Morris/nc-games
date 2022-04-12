import { useState } from "react";
import { postComment } from "../utils/api";
import { useContext } from "react";
import { UserContext } from "../Contexts/User";
import {Link} from "react-router-dom";
import SubmitIcn from "../img/send-button.png";

const PostComments = ({ review_id, setComments, setCommentCount }) => {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");

  const handlePostCommentChange = (event) => {
    const { value } = event.target;
    setNewComment(value);
  };

  const handlePostCommentSubmit = (event) => {
    event.preventDefault();
    if (newComment.length > 0) {
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
    <div>
      <div className="commentform">
        <form onSubmit={handlePostCommentSubmit} id="Form">
          <label className="commentlabel">
            Let us know your thoughts...
          <input
          onChange={handlePostCommentChange}
          value={newComment}
          type="text"
          placeholder="Your comment..."
          className="commentinput"
          />
          </label>
          <input type="image" src={SubmitIcn} value="Submit" className="submit-btn" />
        </form>
      </div>
    <Link to={`/reviews/`}>
      <h5 className="review-link">(return to all reviews)</h5>
    </Link>
  </div>
  );
};

export default PostComments;
