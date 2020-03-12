import React, { Component } from 'react'
import PropTypes from 'prop-types';


class Search extends Component {

  state = {
      text: ''
  };


  onSubmit = (e) => {
      e.preventDefault();
      if(this.state.text ==  '' ) {
        this.props.setAlert('Please enter somethig', 'light')
      } else {
        this.props.searchUsers(this.state.text);
        this.setState({ text: '' });
      }     
  };
  
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });



  render() {

    const { showClear, clearUsers } = this.props;
    return (
      <>
        <form onSubmit={this.onSubmit} className="form">
            <input type='text' 
            name='text' 
            placeholder='Search users...' 
            value={this.state.text}
            onChange={this.onChange} />
            <input type='submit' value='Search' className='btn btn-dark btn-block' />
        </form>
        {showClear && (
          <button className="btn btn-ligt btn-block" onClick={clearUsers}>
          Clear
        </button>
        )}
        
      </>
    )
  }
}

export default Search
