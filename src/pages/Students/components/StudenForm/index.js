import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';

import {
  registerRequest,
  updateRequest,
  showStudents,
} from '~/store/modules/student/actions';

import { Container, Header, Content, Button } from './styles';

export default function StudenForm({ student }) {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    if (student) {
      dispatch(updateRequest(student.id, data));
    } else {
      dispatch(registerRequest(data));
    }
  }

  function handleReturn() {
    dispatch(showStudents(true));
  }

  return (
    <Container>
      <Form id="student-form" initialData={student} onSubmit={handleSubmit}>
        <Header>
          <strong>{student ? 'Edit student' : 'Register student'}</strong>
          <aside>
            <Button type="button" isgray onClick={handleReturn}>
              RETURN
            </Button>
            <Button type="submit">SAVE</Button>
          </aside>
        </Header>
        <Content>
          <Input name="name" placeholder="Your name" label="FULL NAME" />
          <Input
            name="email"
            type="email"
            placeholder="your@email.com"
            label="E-MAIL"
          />

          <div>
            <div>
              <Input name="age" type="number" placeholder="Age" label="AGE" />
            </div>
            <div>
              <Input
                name="weight"
                type="number"
                placeholder="Wight (Kg)"
                label="WEIGHT"
              />
            </div>
            <div>
              <Input
                name="height"
                type="number"
                placeholder="Height (m)"
                label="HEIGHT"
              />
            </div>
          </div>
        </Content>
      </Form>
    </Container>
  );
}

StudenForm.propType = {
  student: PropTypes.objectOf(PropTypes.object),
};
