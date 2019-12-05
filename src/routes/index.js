import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import Students from '~/pages/Students';
import Plans from '~/pages/Plans';
import Enrollments from '~/pages/Enrollments';
import EnrollmentsRegister from '~/pages/Enrollments/Register';
import EnrollmentsEdit from '~/pages/Enrollments/Edit';
import Help from '~/pages/Help';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/students" component={Students} isPrivate />
      <Route path="/plans" component={Plans} isPrivate />

      <Route path="/enrollments" exact component={Enrollments} isPrivate />
      <Route
        path="/enrollments/register"
        component={EnrollmentsRegister}
        isPrivate
      />
      <Route path="/enrollments/edit" component={EnrollmentsEdit} isPrivate />
      <Route path="/help" component={Help} isPrivate />
    </Switch>
  );
}
