import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import Students from '~/pages/Students';
import Plans from '~/pages/Plans';
import Enrollments from '~/pages/Enrollments';
import Help from '~/pages/Help';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/students" component={Students} />
      <Route path="/plans" component={Plans} />
      <Route path="/enrollments" component={Enrollments} />
      <Route path="/help" component={Help} />
    </Switch>
  );
}
