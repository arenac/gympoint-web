import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlanForm from './components/PlanForm';

import {
  getRequest,
  showStudents,
  deleteRequest,
} from '~/store/modules/plan/actions';

import {
  Container,
  Header,
  Content,
  PlanTable,
  EditButton,
  DeleteButton,
} from './styles';

export default function Plans() {
  const dispatch = useDispatch();
  const planState = useSelector(state => state.plan);
  const [planToEdit, setPlanToEdit] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getRequest(page));
  }, [dispatch, page]);

  function handleEditStudent(student) {
    setPlanToEdit(student);
    dispatch(showStudents(false));
  }

  function handleDeleteStudent(id) {
    dispatch(deleteRequest(id));
  }

  return (
    <Container>
      {planState.show ? (
        <>
          <Header>
            <strong>Plan List</strong>
            <aside>
              <button type="button" onClick={() => handleEditStudent(null)}>
                REGISTER
              </button>
            </aside>
          </Header>
          <Content>
            <PlanTable>
              <thead>
                <tr>
                  <th>TITLE</th>
                  <th>DURATION</th>
                  <th>PRICE</th>
                  <th />
                  <th id="delete-column" />
                </tr>
              </thead>
              <tbody>
                {planState.plans.map(plan => (
                  <tr key={plan.id}>
                    <td>{plan.title}</td>
                    <td>
                      {plan.duration === 1
                        ? `${plan.duration} month`
                        : `${plan.duration} months`}
                    </td>
                    <td>{plan.priceFormated}</td>
                    <td align="right">
                      <EditButton
                        type="button"
                        onClick={() => handleEditStudent(plan)}
                      >
                        edit
                      </EditButton>
                    </td>
                    <td align="left">
                      <DeleteButton
                        type="button"
                        onClick={() => handleDeleteStudent(plan.id)}
                      >
                        delete
                      </DeleteButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </PlanTable>
          </Content>
        </>
      ) : (
        <PlanForm plan={planToEdit} />
      )}
    </Container>
  );
}
