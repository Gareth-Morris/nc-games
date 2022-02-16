const SortArea = ({ order, setOrder, sort_by, setSort_by }) => {
  const handleOrder = (event) => {
    const { value } = event.target;
    setOrder(value);
  };

  const handleSort = (event) => {
    const { value } = event.target;
    setSort_by(value);
  };

  return (
    <div className="sortarea">
      <p>Sort reviews by:</p>
      <div className="sortbox">
        <select id="sortBySelect" value={sort_by} onChange={handleSort}>
          <option value="comment_count">Comments</option>
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
        </select>
      </div>
      <div className="sortbox">
        <select value={order} onChange={handleOrder}>
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default SortArea;
