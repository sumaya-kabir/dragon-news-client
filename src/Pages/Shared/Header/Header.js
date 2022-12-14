import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(result => {
      const user = result.user;
      console.log(user)
    })
    .catch(error => console.error(error))
  }

  console.log(user);
    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand><Link to='/'>Dragon News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <>
              {
                user?.uid ?
                <>
                  <button onClick={handleLogOut} className='me-2'>LogOut</button>
                  <span>{user?.displayName}</span>
                </>
                :
                <>
                  <Link to='/login'>Login</Link>
                  <Link to='/register'>Register</Link>
                </>
              }
            </>
            <NavLink to='/profile'>
              {
                user?.photoURL ?
                <img className='w-25 rounded-circle' src={user?.photoURL} alt="" />
                :
                <FaUser></FaUser>
              }
            </NavLink>
          </Nav>
          <div className='d-lg-none'>
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;