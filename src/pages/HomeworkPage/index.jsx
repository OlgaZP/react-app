import React from 'react';
import Calendar from '../../components/Calendar';
import SignUpFormHW from '../../components/SignUpFormHW';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
  } from "react-router-dom";

function HomeworkPage () {
    const {path, url} = useRouteMatch();
    return (
        <div> 
            Homework page
            <ul>
                <li>
                    <Link to={`${url}/calendar`}>Calendar Example</Link>
                </li>
                <li>
                    <Link to={`${url}/signupform`}>SignUp Form Example</Link>
                </li>
            </ul>
            <Switch>
                <Route path={`${path}/calendar`}>
                    <Calendar />
                </Route>
                <Route path={`${path}/signupform`}>
                    <SignUpFormHW />
                </Route>
            </Switch>
        </div>
    );
}

export default HomeworkPage;
  