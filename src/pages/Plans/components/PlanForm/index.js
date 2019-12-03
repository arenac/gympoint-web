import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Form } from '@rocketseat/unform';

import {
  registerRequest,
  updateRequest,
  showStudents,
} from '~/store/modules/plan/actions';
import { formatPrice } from '~/utils/format';

import { Container, Header, Content, Button, InputText } from './styles';

export default function PlanForm({ plan }) {
  console.tron.log(plan);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (plan) {
      setDuration(plan.duration);
      setPrice(plan.price);
      setTotal(formatPrice(duration * price));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTotal(formatPrice(Number(price) * Number(duration)));
  }, [duration, price]);

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
          <strong>{plan ? 'Edit a plan' : 'Register a plan'}</strong>
          <aside>
            <Button type="button" isgray onClick={handleReturn}>
              RETURN
            </Button>
            <Button type="submit">SAVE</Button>
          </aside>
        </Header>
        <Content>
          <label htmlFor="title">PLAN TITLE</label>
          <InputText name="title" />
          <div>
            <div>
              <label htmlFor="duration">DURATION</label>
              <InputText
                name="duration"
                type="number"
                onChange={event => setDuration(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="price">MONTHLY PRICE</label>
              <InputText
                name="price"
                type="number"
                onChange={event => setPrice(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="total">TOTAL PRICE</label>
              <InputText name="total" type="text" disabled value={total} />
            </div>
          </div>
        </Content>
      </Form>
    </Container>
  );
}

PlanForm.propType = {
  plan: PropTypes.shape({
    duration: PropTypes.number,
    price: PropTypes.number,
  }),
};
