import React from 'react';
import { reduxForm, Field } from 'redux-form';
import styled from 'styled-components';
import { connect } from 'react-redux';
import _ from 'lodash';

import Input from '../UI/Input';
import { addClient } from '../../store/actions/clients';

const AddForm = (props) => {
  const addClient = (values) => {
    props.addClient({
      id: _.uniqueId(),
      ...values,
      lastVisit: '------',
      paymentSum: '------',
      visitCount: '------',
      activeTicket: '------',
    });
    props.reset();
  };

  return (
    <Form onSubmit={props.handleSubmit(addClient)}>
      <Field name="name" component={Input} type="text" label="Имя" placeholder="Иванов Иван Иванович" required />
      <Field name="tel" component={Input} type="tel" label="Телефон" required />
      <Field name="email" component={Input} type="email" label="E-mail" placeholder="name@address.ru" required />
      <SubmitButton type="submit">Сохранить</SubmitButton>
    </Form>
  );
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
  editing: state.clients.editing,
});

export default connect(mapStateToProps, { addClient })(reduxForm({
  form: 'addForm',
})(AddForm));