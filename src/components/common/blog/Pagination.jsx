const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize);
  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);





  return (
    <ul className="page_navigation">
      {pages.slice(0,10).map((page) => (
      <li className="page-item active"  key={page}>
        <a className="pagination"  onClick={() => onPageChange(page)}>
          {page}
        </a>
      </li>
      ))}

      {/* <li className="page-item">
        <a className="page-link" href="#">
          1
        </a>
      </li>
      <li className="page-item active" aria-current="page">
        <a className="page-link" href="#">
          2 <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          3
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          ...
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          29
        </a>
      </li>
      <li className="page-item">
        <a className="page-link" href="#">
          <span className="flaticon-right-arrow"></span>
        </a>
      </li> */}
    </ul>
  );
};

export default Pagination;
