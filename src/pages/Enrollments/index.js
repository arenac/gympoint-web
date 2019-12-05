import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import api from '~/services/api';
import { deleteRequest } from '~/store/modules/enrollment/actions';

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
  const [enrollments, setEnrollments] = useState([]);
  const [enrollmentToEdit, setEnrollmentToEdit] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // dispatch(getRequest(page));
    async function fetchData() {
      const response = await api.get('enrollments');

      setEnrollments(response.data);
    }
    fetchData();
  }, []);

  function handleDeleteStudent(id) {
    dispatch(deleteRequest(id));
  }

  return (
    <Container>
      <Header>
        <strong>Enrollment List</strong>
        <aside>
          <Link to="/enrollments/register">REGISTER</Link>
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
            {enrollments.map(enrollment => (
              <tr key={enrollment.id}>
                <td>{enrollment.student ? enrollment.student.name : ''}</td>
                <td>{enrollment.plan ? enrollment.plan.title : ''}</td>
                <td>{enrollment.start_date}</td>
                <td>{enrollment.end_date}</td>
                <td>{enrollment.active}</td>
                <td align="right">
                  <Link
                    to={{
                      pathname: '/enrollments/edit',
                      state: {
                        enrollment,
                      },
                    }}
                  >
                    edit
                  </Link>
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
    </Container>
  );
}
