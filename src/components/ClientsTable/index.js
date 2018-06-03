import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Client from './Client';

const ClientsTable = props => {
  if (!props.clients.length) return (
    <NoData>Вы не добавили ни одного клиента.</NoData>
  );

  return (
    <Table>
      <TableHeader>
        <tr>
          <Th></Th>
          <Th>Клиент</Th>
          <Th>Телефон</Th>
          <Th>E-mail</Th>
          <Th>Дата последнего посещения</Th>
          <Th>Сумма оплат</Th>
          <Th>Количество посещений</Th>
          <Th>Активный абонемент</Th>
        </tr>
      </TableHeader>
      <tbody>
        {props.clients.map(client => (
          <Client
            key={client.id}
            id={client.id}
            name={client.name}
            tel={client.tel}
            email={client.email}
          />
        ))}
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
`;

const Th = styled.th`
  padding: 15px 5px;
`;

const TableHeader = styled.thead`
  border-bottom: 2px solid #bd9ca4;
  color: #a9a5a4;
`;

const NoData = styled.h3`
  margin-top: 50px;
  text-align: center;
`;

const mapStateToProps = state => ({
  clients: state.clients.clientsList,
});

export default connect(mapStateToProps)(ClientsTable);