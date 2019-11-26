import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { Container } from './styles';

export default function SigIn() {
  function handleSubmit() {}
  return (
    <Container>
      <img src={logo} alt="GoBarber" />
      <p>GYMPOINT</p>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">YOUR EMAIL</label>
        <Input name="email" type="email" placeholder="example@email.com" />
        <label htmlFor="password">YOUR PASSWORD</label>
        <Input name="password" type="password" placeholder="*************" />

        <button type="submit">Log In</button>
      </Form>
    </Container>
  );
}
