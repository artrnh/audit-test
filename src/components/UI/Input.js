import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = props => (
  <Label>
    <FieldName>{props.label}</FieldName>
    <TextBox {...props} {...props.input} />
  </Label>
);

Input.defaultProps = {
  label: '',
};

Input.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object.isRequired,
};

const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 48%;
`;

const FieldName = styled.p`
  margin-bottom: 10px;
  font-size: 12px;
  color: #a9a5a4;
`;

const TextBox = styled.input`
  margin-bottom: 5px;
  font-family: 'Roboto';
  padding: 10px 12px;
  outline: none;
  border: 1px solid #dfdfdf;
  border-radius: 15px;
`;

export default Input;