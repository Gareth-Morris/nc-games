import { useEffect, useState } from "react";
import { getComments, deleteComment } from "../utils/api";
import PostComments from "./PostComments";

const Comments = ({ review_id, setCommentCount }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [review_id]);

  const handleDeleteComment = (comment_id, index) => {
    deleteComment(comment_id).then(() => {
      setCommentCount((currCommentCount) => Number(currCommentCount) - 1);
      const newComments = [...comments];
      newComments.splice(index, 1);
      setComments(newComments);
    });
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comments, index) => {
          return (
            <li key={comments.comment_id}>
              <p>{comments.body}</p>
              <button
                onClick={() => {
                  handleDeleteComment(comments.comment_id, index);
                }}
              >
                Delete comment
              </button>
            </li>
          );
        })}
      </ul>
      <PostComments
        review_id={review_id}
        setComments={setComments}
        setCommentCount={setCommentCount}
      />
    </div>
  );
};

export default Comments;
