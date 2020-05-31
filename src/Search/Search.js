import React from 'react';

import PropTypes from 'prop-types';

import { SearchBarContainer, SearchInput } from './styles';

function Search({ handler, value }) {
  return (
    <SearchBarContainer>
      <SearchInput
        onChange={handler}
        value={value}
        placeholder='Search Movies'
      />
    </SearchBarContainer>
  );
}

Search.propTypes = {
  handler: PropTypes.func,
  value: PropTypes.string
};

Search.defaultProps = {
  handler: () => {},
  value: ''
};

export default Search;
