import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import FontAwesomeIcon from '../UI/FontAwesomeIcon';
import { removeClient, activateEditing } from '../../store/actions/clients';

const Client = props => (
  <tr>
    <Td>
      <Button onClick={props.activateEditing(props.id)}>
        <FontAwesomeIcon name="pencil-alt" />
      </Button>
      <Button onClick={props.removeClient(props.id)}>
        <FontAwesomeIcon name="times" />
      </Button>
    </Td>
    <Td>{props.name}</Td>
    <Td>{props.tel}</Td>
    <Td>{props.email}</Td>
    <Td>------</Td>
    <Td>------</Td>
    <Td>------</Td>
    <Td>------</Td>
  </tr>
);

Client.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  removeClient: PropTypes.func.isRequired,
  activateEditing: PropTypes.func.isRequired,
};

const Td = styled.td`
  width: 125px;
  padding: 15px 5px;
  text-align: center;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const mapDispatchToProps = dispatch => ({
  removeClient: id => () => dispatch(removeClient(id)),
  activateEditing: id => () => dispatch(activateEditing(id)),
});

export default connect(null, mapDispatchToProps)(Client);