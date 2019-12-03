import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';

import {
  registerRequest,
  updateRequest,
  showStudents,
} from '~/store/modules/plan/actions';

import { Container, Header, Content, Button } from './styles';

export default function PlanForm({ plan }) {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    if (plan) {
      dispatch(updateRequest(plan.id, data));
    } else {
      dispatch(registerRequest(data));
    }
  }

  function handleReturn() {
    dispatch(showStudents(true));
  }

  return (
    <Container>
      <Form id="student-form" initialData={plan} onSubmit={handleSubmit}>
        <Header>
          <strong>{plan ? 'Edit student' : 'Register student'}</strong>
          <aside>
            <Button type="button" isgray onClick={handleReturn}>
              RETURN
            </Button>
            <Button type="submit">SAVE</Button>
          </aside>
        </Header>
        <Content>
          <label htmlFor="name">FULL NAME</label>
          <Input name="name" />
          <label htmlFor="email">E-MAIL</label>
          <Input name="email" />

          <div>
            <div>
              <label htmlFor="age">AGE</label>
              <Input name="age" />
            </div>
            <div>
              <label htmlFor="weight">WEIGHT</label>
              <Input name="weight" />
            </div>
            <div>
              <label htmlFor="height">HEIGHT</label>
              <Input name="height" />
            </div>
          </div>
        </Content>
      </Form>
    </Container>
  );
}

PlanForm.propType = {
  plan: PropTypes.objectOf(PropTypes.object),
};
