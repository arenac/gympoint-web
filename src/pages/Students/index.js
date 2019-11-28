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
        <span>Stundent List</span>
        <div>
          <button type="button">Register</button>
          <input type="text" />
        </div>
      </Header>
      <Content>
        <StudentTable>
          <thead>
            <th>NAME</th>
            <th>AGE</th>
            <th>E-MAIL</th>
            <th />
            <th />
          </thead>
          <body>
            <tr>
              <td>Nilo</td>
              <td>35</td>
              <td>neregato.nilo@gmail.com</td>
              <td>
                <EditButton type="button">edit</EditButton>
              </td>
              <td>
                <DeleteButton type="button">delete</DeleteButton>
              </td>
            </tr>
          </body>
        </StudentTable>
      </Content>
    </Container>
  );
}
