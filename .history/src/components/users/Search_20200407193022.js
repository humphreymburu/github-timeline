import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types';
import githubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';
import Form from 'react-bootstrap/Form'

const Search = () => {
 
  const GithubContext = useContext(githubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');


 

  const onSubmit = (e) => {
      e.preventDefault();
      if(text === '' ) {
        alertContext.setAlert('Please enter somethig', 'light')
      } else {
        GithubContext.searchUsers(text);
        setText('');
      }     
  };
  
  const onChange = (e) => setText(e.target.value);

    return (
      <>
        <form onSubmit={onSubmit} className="form">
            <input type='text' 
            name='text' 
            placeholder='Search users...' 
            value={text}
            onChange={onChange} />
            <input type='submit' value='Search' className='btn btn-dark btn-block' />
        </form>
        { GithubContext.users.length > 0 && (
          <button className="btn btn-ligt btn-block" onClick={githubContext.clearUsers}>
          Clear
        </button>
        )}

<Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  </Form>
        
      </>
    )
}

export default Search
