import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

const PokemonType = ({ type }) => {
  return (
    <Typography
      className={`pkm-type ${type.toLowerCase()}`}
      style={{ color: 'white', fontFamily: 'Roboto Flex', textAlign: 'center' }}
    >
      {type}
    </Typography>
  );
};

PokemonType.propTypes = {
  type: PropTypes.string.isRequired, 
};

export default PokemonType;