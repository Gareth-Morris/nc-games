import { useState } from "react";
import { incReviewVote } from "../utils/api";

const VoteReviewArea = ({ review }) => {
  const [reviewVotes, setReviewVotes] = useState(review.votes);

  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = () => {
    const vote = hasVoted ? -1 : 1;
    setReviewVotes((reviewVotes) => reviewVotes + vote);

    incReviewVote(review.review_id, vote)
      .then(() => {
        setHasVoted(!hasVoted);
      })
      .catch(() => {
        const vote = hasVoted ? 1 : -1;
        setReviewVotes((reviewVotes) => reviewVotes + vote);
      });
  };

  return (
    <div>
      <p>Votes: {reviewVotes} </p>
      <button onClick={handleVote} className="votebutton">
        Your Vote
      </button>
    </div>
  );
};

export default VoteReviewArea;
