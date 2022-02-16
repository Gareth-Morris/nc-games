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
    <form onSubmit={handlePostCommentSubmit} id="Form" className="commentform">
      <label className="commentlabel">
        Is the reviewer right? Share your views...
        <input
          onChange={handlePostCommentChange}
          value={newComment}
          type="text"
          placeholder="Your comment..."
          className="commentinput"
        />
      </label>
      <input type="submit" value="Submit" className="commentbutton" />
    </form>
  );
};

export default PostComments;
