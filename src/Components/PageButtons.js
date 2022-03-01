const PageButtons = ({ page, setPage, pageLength, totalCount }) => {
  const handlePrev = () => {
    setPage((currPage) => currPage - 1);
  };

  const handleNext = () => {
    setPage((currPage) => currPage + 1);
  };

  return (
    <div className="pagination">
      <button onClick={handlePrev} disabled={page === 0}>
        Prev
      </button>
      <p>
        Page {page + 1} / {Math.floor(totalCount / pageLength) + 1}
      </p>
      <button
        onClick={handleNext}
        disabled={pageLength * (page + 1) >= totalCount}
      >
        Next
      </button>
    </div>
  );
};

export default PageButtons;
