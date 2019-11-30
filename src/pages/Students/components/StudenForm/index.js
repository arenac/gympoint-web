import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Scope } from '@rocketseat/unform';

import { Container, Header, Content } from './styles';

const _return = true;
export default function StudenForm({
  student,
  onSetShowStudents,
  onSetStudentToEdit,
}) {
  function handleReturn() {
    onSetShowStudents(true);
    onSetStudentToEdit(null);
  }

  return (
    <Container>
      <Header>
        <strong>{student ? 'Edit student' : 'Register student'}</strong>
        <aside>
          <button type="button" isgray={_return} onClick={handleReturn}>
            RETURN
          </button>
          <button type="button">SAVE</button>
        </aside>
      </Header>
      <Content>
        <Form name="studentform" initialData={student}>
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
        </Form>
      </Content>
    </Container>
  );
}

StudenForm.propType = {
  student: PropTypes.object,
  onSetShowStudents: PropTypes.func.isRequired,
  onSetStudentToEdit: PropTypes.func.isRequired,
};
