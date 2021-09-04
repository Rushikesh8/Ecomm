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
            
            <button className="teal-bg-color text-white font-bold py-2 px-4 rounded"> ← Previous</button>
          </Link>
        )}
      </div>

      <div className="justify-end">
        {nextPagePath && (
          <Link to={nextPagePath}>
            <button className="teal-bg-color text-white font-bold py-2 px-4 rounded">Next →</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Pager;