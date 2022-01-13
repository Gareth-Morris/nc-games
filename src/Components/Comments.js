import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import { postComments } from "../utils/api";

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(review_id).then((commentsFromApi) => {
      console.log(commentsFromApi);
      setComments(commentsFromApi);
    });
  }, []);

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comments) => {
          return (
            <li key={comments.title}>
              <p>{comments.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
