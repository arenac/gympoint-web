import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import {
  Container,
  Header,
  Content,
  StudentTable,
  EditButton,
  DeleteButton,
} from './styles';

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchStudents() {
      const response = await api.get('students');

      setStudents(response.data);
    }

    fetchStudents();
  }, []);

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
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>
                  <EditButton type="button">edit</EditButton>
                </td>
                <td>
                  <DeleteButton type="button">delete</DeleteButton>
                </td>
              </tr>
            ))}
          </tbody>
        </StudentTable>
      </Content>
    </Container>
  );
}
