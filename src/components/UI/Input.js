import React from 'react';
import styled from 'styled-components';

const Input = props => (
  <Label>
    {props.label}
    <input type={props.type} placeholder={props.placeholder} />
  </Label>
);

Input.defaultProps = {
  label: '',
  type: 'text',
  placeholder: '',
};

const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export default Input;