import React from 'react';
import { Link } from 'gatsby';

const Pager = ({ pageContext }) => {
  console.log(pageContext);
  const { previousPagePath, nextPagePath } = pageContext;
  return (
    <nav  className="flex justify-between my-5">
      <div>
        {previousPagePath && (
          <Link to={previousPagePath}>
            
            <button> ← Previous</button>
          </Link>
        )}
      </div>

      <div className="justify-end">
        {nextPagePath && (
          <Link to={nextPagePath}>
            <button>Next →</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Pager;