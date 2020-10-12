import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import Header from './components/Header'



const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>Survey New</h2>;
const Landing = () => <h2>Landing</h2>;



const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
      <Header/>
      <Route exact={true} path='/' component={Landing}/>
      <Route exact path='/surveys' component={Dashboard}/>
      <Route path='/surveys/new' component={SurveyNew}/>
      </BrowserRouter>
    </div>
  )
}

export default App;
