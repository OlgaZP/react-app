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
  return <h1>React Examples by Olga</h1>;
}

function Footer () {
  return (
    <div class="footer">
      <ContactsPage/>
      
      <AboutPage/>
    </div>
  );
}

function Home () {
  return <div>This is HomePage of project</div>;
}

function App() {
  return (
    <>
      <Header/>
      <nav class="mainMenu">
        <Router>
          <ul class="mainMenuRow">
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/classwork'}>Classwork</Link>
            </li>
            <li>
              <Link to={'/homework'}>Homework</Link>
            </li>
          </ul>        
      
        <Switch>
          <Route exact path={'/'}>
            <Home />
          </Route> 
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
      </nav>  
      <p>These exapmles show my progress on React! They may contain some errors or not popular technologies.</p>
      <Footer/>
    </>
  );
}

export default App;
