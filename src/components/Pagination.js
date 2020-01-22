import React from "react";

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  //80/10 =8   //100/10 =10
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    //Dynamic pagenumbers pushed in the array
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

//Paginate above is a method
