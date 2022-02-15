import { useState } from "react";

const VoteCounter = () => {
  const [count, setCount] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  const increaseVotes = () => {
    setCount(function (currCount) {
      return currCount + 1;
    });
  };

  const decreaseVotes = () => {
    setCount(function (currCount) {
      return currCount - 1;
    });
  };

  const resetVotes = () => {
    setCount(0);
  };

  return (
    <div>
      <p>Number of votes: {count}</p>
      <button onClick={increaseVotes}>Increase</button>
      <button onClick={decreaseVotes}>Decrease</button>
      <button onClick={resetVotes}>Reset</button>
    </div>
  );
};

export default VoteCounter;
