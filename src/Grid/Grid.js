import React from 'react'
import PropTypes from 'prop-types';
import Movies from '../MovieItems/Movies';
import GridContainer from './styles';
import Constants from '../Constants';


const Grid = ({ items }) => {
  return (
    <GridContainer>
      {items.map((item, i) => {
        const idx = i;
        return (
          <Movies
            key={idx}
            title={item.title}
            image={`${Constants.IMAGE_URL}/${item.poster_path}`}
            overview={item.overview}
            ratings={item.vote_average}
          />
        );
      })}
    </GridContainer>
  );
}

Grid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any)
};

Grid.defaultProps = {
  items: []
};

export default Grid;
