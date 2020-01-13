import React, { Fragment, Component } from 'react';
import NavBar from './components/layouts/NavBar';
import UserItem from './components/users/UserItem';
import './App.css';

class App extends Component{


  render() {

    return (
      <>
        <NavBar />
        <UserItem />
      </>
    )
  }

}

export default App;
