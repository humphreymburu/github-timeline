import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom'

const NavBar = (props) => {
   
    return (
      <>
      <div className='App'>
        <nav className="navbar bg-primary">
          <h1><FontAwesomeIcon icon={faGithub} />  {props.title} </h1>
           <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
       </nav>
      </div>
        
      </>
    )

}


NavBar.defaultProps = {
  title: 'Github Finder',
}  


export default NavBar
