import { useEffect, useState } from "react";
import { getComments, deleteComment } from "../utils/api";
import PostComments from "./PostComments";
import DeleteIcn from "../img/delete-button.png";

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
      <ul className="commentlist">
        {comments.map((comments, index) => {
          return (
            <li key={comments.comment_id}>
              <p>{comments.body}</p>
              <button className="delete-btn"><img src={DeleteIcn} alt="Delete" className="delIcn"
                onClick={() => {
                  handleDeleteComment(comments.comment_id, index);
                }}
              />
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
