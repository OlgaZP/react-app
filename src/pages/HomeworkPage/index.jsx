import React from 'react';
import NotFound from '../../components/NotFound';
import Calendar from '../../components/Calendar';
import SignUpFormHW from '../../components/SignUpFormHW';
import ParentUsersListHW from '../../components/ParentUsersListHW';
import SquadCloneLoginPage from '../SquadCloneLoginPage';
import CounterHook from '../../components/CounterHook';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';

function HomeworkPage () {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <p>
        This page contains components realized by myself. Tasks get from
        lessons.
      </p>
      <ul>
        <li>
          <Link to={`${url}/calendar`}>Calendar Example</Link>
        </li>
        <li>
          <Link to={`${url}/signupform`}>SignUp Form Example</Link>
        </li>
        <li>
          <Link to={`${url}/userlisthw`}>UserList Example</Link>
        </li>
        <li>
          <Link to={`${url}/squad`}>Squad Clone Login Example</Link>
        </li>
        <li>
          <Link to={`${url}/counth`}>Simple Counter with Hook Example</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/calendar`}>
          <Calendar />
        </Route>
        <Route path={`${path}/signupform`}>
          <SignUpFormHW />
        </Route>
        <Route path={`${path}/userlisthw`}>
          <ParentUsersListHW />
        </Route>
        <Route path={`${path}/squad`}>
          <SquadCloneLoginPage />
        </Route>
        <Route path={`${path}/counth`}>
          <CounterHook />
        </Route>
        <Route path={`${path}/*`}>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default HomeworkPage;
