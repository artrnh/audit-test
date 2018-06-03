import React from 'react';
import styled from 'styled-components';

import AddForm from './components/AddForm';
import ClientsTable from './components/ClientsTable'

const App = () => (
  <Container>
    <h1>Клиенты</h1>
    <AddForm />
    <ClientsTable />
  </Container>
);

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

export default App;
