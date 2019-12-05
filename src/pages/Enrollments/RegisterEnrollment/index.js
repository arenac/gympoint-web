import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';

import ReactSelect from '../components/ReactSelect';
import ReactAsyncSelect from '../components/ReactAsyncSelect';
import DatePicker from '../components/DatePicker';

import api from '~/services/api';

import { Container, Header, Content, Label, ControlElement } from './styles';

export default function RegisterEnrollment() {
  const dispatch = useDispatch();
  const [plans, setPlans] = useState([]);
  const [choosedPlan, setChoosedPlan] = useState('');
  const [priceFormated, setPriceFormated] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    async function loadlans() {
      const response = await api.get('plans');
      setPlans(response.data);
    }

    loadlans();
  }, []);

  const filterStudents = inputValue => {
    async function loadStudents() {
      const response = await api.get(`students?student_name=${inputValue}`);

      return response.data;
    }

    return loadStudents();
  };

  const promiseOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(filterStudents(inputValue));
      }, 1000);
    });
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Container>
      <Form id="student-form" onSubmit={handleSubmit}>
        <Header>
          <strong>Edit a enrollment</strong>
          <aside>
            <Link to="/enrollments">
              <button type="button">RETURN</button>
            </Link>
            <button type="submit">SAVE</button>
          </aside>
        </Header>
        <Content>
          <div className="editRow">
            <ControlElement>
              <Label>STUDENT</Label>
              <div className="selectStudent">
                <ReactAsyncSelect name="student_id" options={promiseOptions} />
              </div>
            </ControlElement>
          </div>
          <div className="editColumn">
            <ControlElement>
              <Label>PLAN</Label>
              <div className="selectElement">
                <ReactSelect
                  name="plan_id"
                  placeholder="Choose a plan"
                  className="basic-single"
                  classNamePrefix="select"
                  onChange={plan => setChoosedPlan(plan)}
                  options={plans}
                />
              </div>
            </ControlElement>
            <ControlElement>
              <Label>START DATE</Label>
              <DatePicker
                name="start_date"
                placeholder="Start date"
                onChangeDate={data => setStartDate(data)}
              />
            </ControlElement>
            <ControlElement>
              <Label>END DATE</Label>
              <Input name="end_date" value={endDate} readOnly />
            </ControlElement>
            <ControlElement>
              <Label>TOTAL PRICE</Label>
              <Input name="price" type="text" value={priceFormated} readOnly />
            </ControlElement>
          </div>
        </Content>
      </Form>
    </Container>
  );
}
