import React from 'react';
import styled from 'styled-components';

import AddForm from './components/AddForm';

const App = () => (
  <Container>
    <Title>Клиенты</Title>
    <AddForm />
  </Container>
);

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h1`

`;

export default App;
