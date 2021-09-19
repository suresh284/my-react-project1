import React from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import DashboardContainer from './Containers/DashboardContainer';
import MainPageContainer from './Containers/MainPageContainer';
import Page404 from './Components/Page404';
import BusinessNewsContainer from './Containers/BusinessNewsContainer';
import TechNewsContainer from './Containers/TechNewsContainer'

function App() {
  return (
      <Switch>
          <Route exact path='/' component={MainPageContainer} /> 
          <Route exact path='/dashboard' component={DashboardContainer} />
          <Route exact path='/news/business' component={BusinessNewsContainer} />
          <Route exact path='/news/tech' component={TechNewsContainer} />
          <Route path='*' component={Page404} />
      </Switch>
  );
}

export default App;
