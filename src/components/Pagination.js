import React from "react";

const BasicPagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);

  return (
    <nav>
      <ul class="pagination">
        {pageNumbers.map((number) => (
          <li key={number} class="page-item">
            <a onClick={() => paginate(number)} href="!#" class="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BasicPagination;
