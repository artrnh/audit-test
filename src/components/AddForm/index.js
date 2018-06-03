import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import styled from 'styled-components';
import { connect } from 'react-redux';
import _ from 'lodash';

import Input from '../UI/Input';
import { addClient, editClient } from '../../store/actions/clients';

class AddForm extends Component {
  componentDidUpdate() {
    if (this.props.editingClientId) {
      const editingClient = this.props.clients.find(client => client.id === this.props.editingClientId);
      Object.keys(editingClient).forEach(key => {
        this.props.change(key, editingClient[key]);
      });
    }
  }

  addClient = (values) => {
    console.log('values', values);
    this.props.addClient({ id: _.uniqueId(), ...values, });
    this.props.reset();
  };

  editClient = (values) => {
    console.log('values', values);
    this.props.editClient(values);
    this.props.reset();
  };

  render() {
    const submitHandler = this.props.editingClientId ? this.editClient : this.addClient;

    return (
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
      </Form>
    );
  }
}

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 30px;
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

const mapStateToProps = state => ({
  editingClientId: state.clients.editingClientId,
  clients: state.clients.clientsList,
});

const DecoratedAddForm = reduxForm({
  form: 'addForm',
})(AddForm);

export default connect(mapStateToProps, { addClient, editClient })(DecoratedAddForm);
