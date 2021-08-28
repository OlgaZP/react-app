import React, { useState } from 'react';
import NotFound from '../../components/NotFound';
import CounterWrapper from '../../components/CounterWrapper';
import Greeting from '../../components/Greeting';
import ParentUsersList from '../../components/ParentUsersList';
import LoginForm from '../../components/LoginForm';
import ViewPortParams from '../../components/ViewPortParams';
import UsersLoader from '../../components/UsersLoader';
import UsersLoaderHook from '../../components/UsersLoaderHook';
import PhonesProvider from '../../components/PhonesProvider';
import UsersProvider from '../../components/UsersProvider';
import DataProvider from '../../components/DataProvider';
import ContextExample from '../../components/ContextExample';
import UserPage from '../UserPage';
import YupForm from '../../components/YupForm';
import MouseClickerHook from '../../components/MouseClickerHook';
import ClickerHook from '../../components/ClickerHook';
import StopwatchHook from '../../components/StopwatchHook';
import CounterHook from '../../components/CounterHook';
import CounterThemeHook from '../../components/CounterThemeHook';
import UsersLoaderWithCustomHook from '../../components/UsersLoaderWithCustomHook';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import { ThemeContext } from '../../contexts';
import CONSTANTS from '../../constants';
import CounterWithReducerHook from '../../components/CounterWithReducerHook';

function Classwork () {
  const { path, url } = useRouteMatch();

  const themes = useState(CONSTANTS.THEMES.LIGHT);
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
          <Link to={`${url}/counterh`}>Simple Counter with Hook</Link>
        </li>
        <li>
          <Link to={`${url}/countert`}>Simple Counter with Theme and Hook</Link>
        </li>
        <li>
          <Link to={`${url}/counterr`}>Simple Counter with Reducer Hook</Link>
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
          <Link to={`${url}/usersloaderh`}>UsersLoader with Hook Example</Link>
        </li>
        <li>
          <Link to={`${url}/usersloaderch`}>
            UsersLoader with Custom Hook Example
          </Link>
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
        <li>
          <Link to={`${url}/clicker`}>MouseClicker with Hook Example</Link>
        </li>
        <li>
          <Link to={`${url}/clickhook`}>ClickCounter with Hook Example</Link>
        </li>
        <li>
          <Link to={`${url}/watchhook`}>Stopwatch with Hook Example</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/greeting`}>
          <Greeting name='Olga' />
        </Route>
        <Route path={`${path}/counter`}>
          <CounterWrapper />
        </Route>
        <Route path={`${path}/counterh`}>
          <CounterHook />
        </Route>
        {/* пример смены темы компонента */}
        <Route path={`${path}/countert`}>
          <ThemeContext.Provider value={themes}>
            <CounterThemeHook />
          </ThemeContext.Provider>
        </Route>
        <Route path={`${path}/counterr`}>
          <CounterWithReducerHook />
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
        <Route path={`${path}/usersloaderh`}>
          <UsersLoaderHook />
        </Route>
        <Route path={`${path}/usersloaderch`}>
          <UsersLoaderWithCustomHook />
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
        <Route path={`${path}/clicker`}>
          <MouseClickerHook />
        </Route>
        <Route path={`${path}/clickhook`}>
          <ClickerHook />
        </Route>
        <Route path={`${path}/watchhook`}>
          <StopwatchHook />
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
  );
}

export default Classwork;
