import React, { Fragment, Component } from 'react';
import NavBar from './components/layouts/NavBar';
import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';


import './App.css';

class App extends Component{

  state = {
    users: [],
    trends: [],
    loading: false
  }
  




 //async componentDidMount() {
 //  console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
   
 //  this.setState({loading:true});

 //  const res = await 
  // axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  // this.setState({users:res.data, loading: false});

 // }

 // search github users
  searchUsers = async text => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}
    `);
   this.setState({users:res.data.items, loading: false});
  }


  render() {

    return (
      <>
      <div className='App'>
      <NavBar />
      </div>
      <div className='container'>
      <Search  searchUsers={this.searchUsers}/>
      <Users loading={this.state.loading} users={this.state.users}/>
      
      </div>
  
      </>
    )
  }

}

export default App;
