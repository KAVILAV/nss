// import React from 'react'
// import { Link } from 'react-router-dom';
// import '../css/admin.css';
// function Admin() {
  // return (
   /*  <div>
      <Link to="/userget">Go to Userget</Link>  <br />
        <Link to='/volunteer'> go to volunteer</Link> <br />
        <Link to='/adminlogin'> go to adminlogin</Link> <br />
    </div>
  ); 
 */
  //  return (
  //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //     <div className="container">
  //       <Link className="navbar-brand" to="/userlogin">Login</Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          </ul>
        </div> */}
      {/* </div>
    </nav>
  ); 
} */}

// export default Admin

// import React from 'react';
// import { Typography } from '@mui/material';
// import Button from '@mui/material/Button';
// import { useNavigate,Link} from 'react-router-dom';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';



function Admin() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Register</Nav.Link>
            <Nav.Link href="#">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Admin;