import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Scope } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import api from '~/services/api';

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

  async function registerStudent(data) {
    try {
      await api.post('students', data);
    } catch (err) {
      toast.error('Stundet subscription failure');
    }
  }

  async function updateStudent(data) {
    try {
      await api.put(`/students/${student.id}`, data);
    } catch (err) {
      toast.error('Student update failure');
    }
  }

  async function handleSubmit(data) {
    console.tron.log('data', data);
    if (student) {
      updateStudent(data);
    } else {
      registerStudent(data);
    }
    handleReturn();
  }

  return (
    <Container>
      <Form id="student-form" initialData={student} onSubmit={handleSubmit}>
        <Header>
          <strong>{student ? 'Edit student' : 'Register student'}</strong>
          <aside>
            <button type="button" isgray={_return} onClick={handleReturn}>
              RETURN
            </button>
            <button type="submit">SAVE</button>
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

StudenForm.propType = {
  student: PropTypes.object,
  onSetShowStudents: PropTypes.func.isRequired,
  onSetStudentToEdit: PropTypes.func.isRequired,
};
