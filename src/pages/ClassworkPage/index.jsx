import React from 'react'
import CounterWrapper from '../../components/CounterWrapper';
import Greeting from '../../components/Greeting';
import LoginForm from '../../components/LoginForm';
import ViewPortParams from '../../components/ViewPortParams';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
  } from "react-router-dom";

function Classwork() {
    const {path, url} = useRouteMatch();
    return (
        <div>
            ClassWorks components
            <ul>
                <li>
                    <Link to={`${url}/greeting`}>Greeting</Link>
                </li>
                <li>
                    <Link to={`${url}/counter`}>Simple Counter</Link>
                </li>
                <li>
                    <Link to={`${url}/loginform`}>Login Form Example</Link>
                </li>
                <li>
                    <Link to={`${url}/viewport`}>ViewPort Parameters Example</Link>
                </li>
                
            </ul>

            <Switch>
                <Route path={`${path}/greeting`}>
                    <Greeting name='Olga' />
                </Route>
                <Route path={`${path}/counter`}>
                    <CounterWrapper />
                </Route>
                <Route path={`${path}/loginform`}>
                    <LoginForm />
                </Route>
                <Route path={`${path}/viewport`}>
                    <ViewPortParams />
                </Route>
                
            </Switch>
        </div>
    )
}

export default Classwork;
