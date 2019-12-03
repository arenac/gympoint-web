import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EnrollmentForm from './components/EnrollmentForm';

import {
  getRequest,
  showEnrollments,
  deleteRequest,
} from '~/store/modules/enrollment/actions';

import {
  Container,
  Header,
  Content,
  EnrollmentTable,
  EditButton,
  DeleteButton,
} from './styles';

export default function Enrollments() {
  const dispatch = useDispatch();
  const enrollmentState = useSelector(state => state.enrollment);
  const [enrollmentToEdit, setEnrollmentToEdit] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getRequest(page));
  }, [dispatch, page]);

  function handleEditEnrollment(enrollment) {
    setEnrollmentToEdit(enrollment);
    dispatch(showEnrollments(false));
  }

  function handleDeleteStudent(id) {
    dispatch(deleteRequest(id));
  }

  return (
    <Container>
      {enrollmentState.show ? (
        <>
          <Header>
            <strong>Enrollment List</strong>
            <aside>
              <button type="button" onClick={() => handleEditEnrollment(null)}>
                REGISTER
              </button>
            </aside>
          </Header>
          <Content>
            <EnrollmentTable>
              <thead>
                <tr>
                  <th>STUDENT</th>
                  <th>PLAN</th>
                  <th>START</th>
                  <th>END</th>
                  <th>ACTIVE</th>
                  <th />
                  <th id="enrollment-delete-col" />
                </tr>
              </thead>
              <tbody>
                {enrollmentState.enrollments.map(enrollment => (
                  <tr key={enrollment.id}>
                    <td>{enrollment.student ? enrollment.student.name : ''}</td>
                    <td>{enrollment.plan ? enrollment.plan.title : ''}</td>
                    <td>{enrollment.start_date}</td>
                    <td>{enrollment.end_date}</td>
                    <td>{enrollment.active}</td>
                    <td align="right">
                      <EditButton
                        type="button"
                        onClick={() => handleEditEnrollment(enrollment)}
                      >
                        edit
                      </EditButton>
                    </td>
                    <td align="left">
                      <DeleteButton
                        type="button"
                        onClick={() => handleDeleteStudent(enrollment.id)}
                      >
                        delete
                      </DeleteButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </EnrollmentTable>
          </Content>
        </>
      ) : (
        <EnrollmentForm enrollment={enrollmentToEdit} />
      )}
    </Container>
  );
}
