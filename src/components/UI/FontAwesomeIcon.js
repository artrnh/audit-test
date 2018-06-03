import React from 'react';
import PropTypes from 'prop-types';

const FontAwesomeIcon =  props => (
  <i className={`fas fa-${props.name}`} style={{ fontSize: '18px' }} {...props}></i>
);

FontAwesomeIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FontAwesomeIcon;
