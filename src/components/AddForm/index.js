import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import styled from 'styled-components';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';

import Input from '../UI/Input';
import { addClient, editClient, toggleForm } from '../../store/actions/clients';
import FontAwesomeIcon from '../UI/FontAwesomeIcon';

class AddForm extends Component {
  static propTypes = {
    change: PropTypes.func.isRequired,
    addClient: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired,
    editingClientId: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    opened: PropTypes.bool.isRequired,
    clients: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      tel: PropTypes.string,
      email: PropTypes.string,
    })).isRequired,
  };

  shouldComponentUpdate(nextProps) {
    if (nextProps.editingClientId && nextProps.editingClientId !== this.props.editingClientId) {
      const editingClient = this.props.clients.find(client => client.id === nextProps.editingClientId);
      Object.keys(editingClient).forEach(key => {
        this.props.change(key, editingClient[key]);
      });
    }

    return true;
  }

  addClient = (values) => {
    this.props.addClient({ id: Number(_.uniqueId()), ...values, });
    this.props.reset();
    this.props.toggleForm();
  };

  editClient = (values) => {
    this.props.editClient(values);
    this.props.reset();
    this.props.toggleForm();
  };

  render() {
    const { editingClientId, toggleForm, opened } = this.props;
    const submitHandler = editingClientId ? this.editClient : this.addClient;

    const form = (
      <Form onSubmit={this.props.handleSubmit(submitHandler)}>
        <Field
          name="name"
          component={Input}
          type="text"
          label="Имя"
          placeholder="Иванов Иван Иванович"
          required
        />
        <Field
          name="tel"
          component={Input}
          type="tel"
          label="Телефон"
          required
        />
        <Field
          name="email"
          component={Input}
          type="email"
          label="E-mail"
          placeholder="name@address.ru"
          required
        />
        <SubmitButton type="submit">Сохранить</SubmitButton>
        <ToggleButtons>
          <ToggleBtn type="button" onClick={toggleForm}>
            <FontAwesomeIcon name="angle-up" style={{ fontSize: '30px' }} />
          </ToggleBtn>
          <ToggleBtn type="button" onClick={toggleForm}>
            <FontAwesomeIcon name="angle-up" style={{ fontSize: '30px' }} />
          </ToggleBtn>
        </ToggleButtons>
      </Form>
    );

    return (
      <div>
        <AddButton onClick={toggleForm}>
          <FontAwesomeIcon name="plus-circle" />
          <AddButtonText>Добавить клиента</AddButtonText>
        </AddButton>
        {opened && form}
      </div>
    );
  }
}

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 1px solid #dfdfdf;
`;

const SubmitButton = styled.button`
  align-self: flex-end;
  margin-right: auto;
  margin-left: 4%;
  margin-bottom: 5px;
  padding: 10px 20px;
  font-family: 'Roboto';
  color: #fff;
  font-weight: 700;
  background-color: #c32630;
  border: none;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
`;

const AddButton = styled.button`
  display: flex;
  margin-bottom: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const AddButtonText = styled.p`
  font-family: 'Roboto';
  margin: 0;
  margin-left: 8px;
  font-size: 16px;
  color: #302e30;
  font-weight: 700;
`;

const ToggleButtons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const ToggleBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const mapStateToProps = state => ({
  editingClientId: state.clients.editingClientId,
  clients: state.clients.clientsList,
  opened: state.clients.formOpened,
});

const DecoratedAddForm = reduxForm({
  form: 'addForm',
})(AddForm);

export default connect(mapStateToProps, { addClient, editClient, toggleForm })(DecoratedAddForm);
