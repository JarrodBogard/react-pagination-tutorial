import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers &&
          pageNumbers.map((num, i) => (
            <li key={num + i} className="page-item">
              <a onClick={() => paginate(num)} href="!#" className="page-link">
                {num}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Pagination;
