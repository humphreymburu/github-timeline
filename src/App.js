import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/layouts/NavBar';
import UserItem from './components/users/UserItem';
import User from './components/users/User';
import About from './components/pages/About';
import Alert from './components/layouts/Alert';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/alertState';

import './App.css';

const App = () => {

 
    return (
      <GithubState>
        <AlertState>
      <Router>
      <NavBar />

      <div className='container'>
        <Alert />
          <Switch>
          <Route
          exact
          path='/'
          component={Home}
          />
           <Route exact path='/about' component={About} />
           <Route exact path='/user/:login'
           component={User}/>
           <Route component={NotFound}/>
           />
           </Switch>
          
         
        
            
      
      </div>
      </Router>
      </AlertState>
      </GithubState>
    )

}

export default App;
