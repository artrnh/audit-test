import React from 'react';
import { reduxForm, Field } from 'redux-form';
import styled from 'styled-components';

import Input from '../UI/Input';

const AddForm = (props) => {
  return (
    <Form>
      <Field name="name" component={Input} type="text" label="Имя" placeholder="Иванов Иван Иванович" />
      <Field name="tel" component={Input} type="tel" label="Телефон" />
      <Field name="email" component={Input} type="email" label="E-mail" placeholder="name@address.ru" />
      <button type="submit">Сохранить</button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export default reduxForm({
  form: 'addForm',
})(AddForm);