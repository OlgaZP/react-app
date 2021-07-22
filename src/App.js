//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import AboutPage from './pages/AboutPage';
import ClassworkPage from './pages/ClassworkPage';
import HomeworkPage from './pages/HomeworkPage';
import ContactsPage from './pages/ContactsPage';
import NotFound from './components/NotFound';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

//main application page like table of contents
//use routing
function Header () {
  return <h1>Header React Examples</h1>;
}

function Footer () {
  return (
    <>
      <ContactsPage/>
      
      <AboutPage/>
    </>
  );
}

function App() {
  return (
    <>
      <Header/>
      <div>
        <Router>
          <ul>
            <li>
              <Link to={'/classwork'}>Classwork</Link>
            </li>
            <li>
              <Link to={'/homework'}>Homework</Link>
            </li>
          </ul>
        
        <Switch>
          <Route path={'/classwork'}>
            <ClassworkPage />
          </Route>
          <Route path={'/homework'}>
            <HomeworkPage />
          </Route>
          <Route path={'*'}>
            <NotFound />
          </Route>
        </Switch>
        </Router>
        
      </div>
      <Footer/>
    </>
  );
}

export default App;
