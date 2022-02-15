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
    <div>
      <div>
        <select id="sortBySelect" value={sort_by} onChange={handleSort}>
          <option value="comment_count">Comments</option>
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
        </select>
      </div>
      <div>
        <select value={order} onChange={handleOrder}>
          <option value="ASC">Asc</option>
          <option value="DESC">Desc</option>
        </select>
      </div>
    </div>
  );
};

export default SortArea;
