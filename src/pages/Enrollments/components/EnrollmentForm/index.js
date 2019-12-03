import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Select } from '@rocketseat/unform';

import {
  registerRequest,
  updateRequest,
  showEnrollments,
} from '~/store/modules/enrollment/actions';
import { formatPrice } from '~/utils/format';

import { Container, Header, Content, Button, InputText } from './styles';

export default function EnrollmentForm({ enrollment }) {
  const dispatch = useDispatch();
  const [priceFormated, setPriceFormated] = useState();
  const [plan, setPlan] = useState();
  const [studentName, setStudentName] = useState('');

  useEffect(() => {
    if (enrollment) {
      setPriceFormated(formatPrice(enrollment.price));
      setPlan(enrollment.plan ? enrollment.plan.title : '');
      setStudentName(enrollment.student ? enrollment.student.name : '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSubmit(data) {
    console.tron.log(data);
    if (enrollment) {
      // dispatch(updateRequest(enrollment.id, data));
    } else {
      // dispatch(registerRequest(data));
    }
  }

  function handleReturn() {
    dispatch(showEnrollments(true));
  }

  return (
    <Container>
      <Form id="student-form" initialData={enrollment} onSubmit={handleSubmit}>
        <Header>
          <strong>
            {enrollment ? 'Edit a enrollment' : 'Register a enrollment'}
          </strong>
          <aside>
            <Button type="button" isgray onClick={handleReturn}>
              RETURN
            </Button>
            <Button type="submit">SAVE</Button>
          </aside>
        </Header>
        <Content>
          <InputText
            name="student"
            placeholder="Seach student"
            value={studentName}
            onChange={event => setStudentName(event.target.value)}
            label="STUDENT"
          />
          <div>
            <div>
              <Select
                label="PLAN"
                name="plan"
                placeholder="Select a plan"
                options={[
                  { id: 'Start', title: 'Start' },
                  { id: 'Gold', title: 'Gold' },
                  { id: 'Diamond', title: 'Diamond' },
                ]}
                value={plan}
              />
              {/* <InputText
                name="plan"
                type="number"
                value={plan}
                placeholder="Select a plan"
                label="PLAN"
              /> */}
            </div>
            <div>
              <InputText
                name="start_date"
                placeholder="Choose a date"
                onChange={event => setPriceFormated(event.target.value)}
                label="START DATE"
              />
            </div>
            <div>
              <InputText name="end_date" disabled label="END DATE" />
            </div>
            <div>
              <InputText
                name="price"
                type="text"
                disabled
                value={priceFormated}
                label="TOTAL PRICE"
              />
            </div>
          </div>
        </Content>
      </Form>
    </Container>
  );
}

EnrollmentForm.propType = {
  enrollment: PropTypes.shape({
    duration: PropTypes.number,
    price: PropTypes.number,
  }),
};
