import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import { Link } from "react-router-dom";

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments().then((commentsFromApi) => {
      console.log("Got comments");
      setComments(commentsFromApi);
      console.log(commentsFromApi);
    });
  }, []);

  return (
    <div>
      <ul>
        {comments.map((comments) => {
          return (
            <li key={comments.title}>
              <Link to={`/comments/${comments}`}>
                <p>{comments.body}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
