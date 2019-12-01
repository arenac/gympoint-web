import React, { useState, useEffect } from 'react';

import api from '~/services/api';
import StudentForm from './components/StudenForm';

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
  const [showStudents, setShowStudents] = useState(true);
  const [studentToEdit, setStudentToEdit] = useState(null);

  async function fetchStudents() {
    const response = await api.get('students');

    setStudents(response.data);
  }

  useEffect(() => {
    fetchStudents();
  }, [showStudents, setShowStudents]);

  function handleEditStudent(student) {
    setStudentToEdit(student);
    setShowStudents(false);
  }

  function handleShowStudents(refresh) {
    setShowStudents(true);
    setStudentToEdit(null);
    if (refresh) {
      fetchStudents();
    }
  }

  async function handleDeleteStudent(id) {
    await api.delete(`/students/${id}`);
  }

  return (
    <Container>
      {showStudents ? (
        <>
          <Header>
            <strong>Stundent List</strong>
            <aside>
              <button type="button" onClick={() => handleEditStudent(null)}>
                REGISTER
              </button>
              <input type="text" />
            </aside>
          </Header>
          <Content>
            <StudentTable>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>E-MAIL</th>
                  <th>AGE</th>
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody>
                {students.map(student => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.age}</td>
                    <td>
                      <EditButton
                        type="button"
                        onClick={() => handleEditStudent(student)}
                      >
                        edit
                      </EditButton>
                    </td>
                    <td>
                      <DeleteButton
                        type="button"
                        onClick={() => handleDeleteStudent(student.id)}
                      >
                        delete
                      </DeleteButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </StudentTable>
          </Content>
        </>
      ) : (
        <StudentForm
          student={studentToEdit}
          onShowStudents={handleShowStudents}
        />
      )}
    </Container>
  );
}
