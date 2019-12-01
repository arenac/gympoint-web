import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '~/services/api';
import StudentForm from './components/StudenForm';

import {
  getRequest,
  showStudents,
  deleteRequest,
} from '~/store/modules/student/actions';

import {
  Container,
  Header,
  Content,
  StudentTable,
  EditButton,
  DeleteButton,
} from './styles';

export default function Students() {
  const dispatch = useDispatch();
  const studentState = useSelector(state => state.student);
  const [studentToEdit, setStudentToEdit] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getRequest(page));
  }, [dispatch, page]);

  function handleEditStudent(student) {
    setStudentToEdit(student);
    dispatch(showStudents(false));
  }

  function handleDeleteStudent(id) {
    dispatch(deleteRequest(id));
  }

  return (
    <Container>
      {studentState.show ? (
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
                {studentState.students.map(student => (
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
        <StudentForm student={studentToEdit} />
      )}
    </Container>
  );
}
