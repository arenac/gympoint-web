import React from 'react';

import {
  Container,
  Header,
  Content,
  StudentTable,
  EditButton,
  DeleteButton,
} from './styles';

export default function Students() {
  return (
    <Container>
      <Header>
        <strong>Stundent List</strong>
        <aside>
          <button type="button">REGISTER</button>
          <input type="text" />
        </aside>
      </Header>
      <Content>
        <StudentTable>
          <thead>
            <th>NAME</th>
            <th>E-MAIL</th>
            <th>AGE</th>
            <th />
            <th />
          </thead>
          <tbody>
            <tr>
              <td>Nilo Neregato</td>
              <td>neregato.nilo@gmail.com</td>
              <td>35</td>
              <td>
                <EditButton type="button">edit</EditButton>
              </td>
              <td>
                <DeleteButton type="button">delete</DeleteButton>
              </td>
            </tr>
          </tbody>
        </StudentTable>
      </Content>
    </Container>
  );
}
