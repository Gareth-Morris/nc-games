import { useState } from "react";

const VoteCounter = () => {
  const [count, setCount] = useState(0);

  const increaseVotes = () => {
    setCount(function (currCount) {
      return currCount + 1;
    });
  };

  const resetVotes = () => {
    setCount(0);
  };

  return (
    <div>
      <p>Number of votes: {count}</p>
      <button onClick={increaseVotes}>Increase</button>
      <button onClick={resetVotes}>Reset</button>
    </div>
  );
};

export default VoteCounter;
