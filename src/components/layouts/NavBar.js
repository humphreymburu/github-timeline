import React, { Suspense, lazy } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const NavBar = (props) => {
   
    return (
      <>
      <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#home">Github Finder</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href='./'>Home</Nav.Link>
      <Nav.Link href='/about'>About</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  
        
      </>
    )

}





export default NavBar
