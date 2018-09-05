import React from 'react';
import { Link } from 'react-router';

// let Router control the behavior of the links
const FilterLink = ( { filter, children } ) => {
  return (
    <Link
      to={filter === 'all' ? '' : filter}
      activeStyle={{
        textDecoration: 'none',
        color: 'black',
      }}
    >
      {children}
    </Link>
  );
};

export default FilterLink;