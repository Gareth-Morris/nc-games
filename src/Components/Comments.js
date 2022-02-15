import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import PostComments from "./PostComments";

const Comments = ({ review_id, setCommentCount }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, [review_id]);

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comments) => {
          return (
            <li key={comments.comment_id}>
              <p>{comments.body}</p>
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
