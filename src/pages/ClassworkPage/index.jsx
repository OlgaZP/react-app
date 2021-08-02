import React from 'react';
import NotFound from '../../components/NotFound';
import CounterWrapper from '../../components/CounterWrapper';
import Greeting from '../../components/Greeting';
import ParentUsersList from '../../components/ParentUsersList';
import LoginForm from '../../components/LoginForm';
import ViewPortParams from '../../components/ViewPortParams';
import UsersLoader from '../../components/UsersLoader';
import PhonesProvider from '../../components/PhonesProvider';
import UsersProvider from '../../components/UsersProvider';
import DataProvider from '../../components/DataProvider';
import ContextExample from '../../components/ContextExample';
import UserPage from '../UserPage';
import YupForm from '../../components/YupForm';

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
            ClassWorks components were writing during lessons.
            <ul>
                <li>
                    <Link to={`${url}/greeting`}>Greeting</Link>
                </li>
                <li>
                    <Link to={`${url}/counter`}>Simple Counter</Link>
                </li>
                <li>
                    <Link to={`${url}/userslist`}>UsersList Example 1</Link>
                </li>
                <li>
                    <Link to={`${url}/loginform`}>Login Form Example</Link>
                </li>
                <li>
                    <Link to={`${url}/viewport`}>ViewPort Parameters Example</Link>
                </li>
                <li>
                    <Link to={`${url}/usersloader`}>UsersLoader Example</Link>
                </li>
                <li>
                    <Link to={`${url}/phonesprovider`}>PhonesProvider Example</Link>
                </li>
                <li>
                    <Link to={`${url}/usersprovider`}>UsersProvider Example</Link>
                </li>
                {/* <li>
                    <Link to={`${url}/dataprovider`}>DataProvider Template</Link>
                </li> */}
                <li>
                    <Link to={`${url}/context`}>UserPage with Context Example</Link>
                </li>     
                <li>
                    <Link to={`${url}/easyform`}>Form with Yup Example</Link>
                </li>            
                
            </ul>

            <Switch>
                <Route path={`${path}/greeting`}>
                    <Greeting name='Olga' />
                </Route>
                <Route path={`${path}/counter`}>
                    <CounterWrapper />
                </Route>
                <Route path={`${path}/userslist`}>
                    <ParentUsersList />
                </Route>
                <Route path={`${path}/loginform`}>
                    <LoginForm />
                </Route>
                <Route path={`${path}/viewport`}>
                    <ViewPortParams />
                </Route>
                <Route path={`${path}/usersloader`}>
                    <UsersLoader />
                </Route>
                <Route path={`${path}/phonesprovider`}>
                    <PhonesProvider />
                </Route>
                <Route path={`${path}/usersprovider`}>
                    <UsersProvider />
                </Route>
                <Route path={`${path}/context`}>
                    <ContextExample />
                </Route>      
                <Route path={`${path}/easyform`}>
                    <YupForm />
                </Route>          
                {/* <Route path={`${path}/dataprovider`}>
                    <DataProvider fileName='/phones.json'> 
                        return <> 
                            {isFetching&& <div>Loading...</div>}
                            {error&& <div>EROOR</div>}
                            <ul>
                                {phones.map(p => (
                                    <li key={p.id}>
                                    {p.brand} {p.model}: {p.price}
                                    </li>
                                ))}
                            </ul>
                        </>;
                    <DataProvider/>
                </Route> */}
                <Route path={`${path}/*`}>
                    <NotFound />
                </Route>
                
            </Switch>
        </div>
    )
}

export default Classwork;
