import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Search, Envelope, Gear, Bell } from 'react-bootstrap-icons';
import profileImage from '../assets/images/profile.jpg';
import '../assets/css/header.scss'; 
import Logo from '../assets/images/logo.png';


const Header = () => {
  return (
    <Navbar className="bg-darkgray header" expand="lg">
      <Navbar.Brand href="#home"><img src={Logo} alt='' title='' className='logo'/>
      </Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
     
        <Form inline className="me-auto">
          <InputGroup className="search--input">
            <InputGroup.Text id="basic-addon1">
              <Search />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form>
        <div className="navbar-right">
          <div className="navbar-icons">
            <span className="navbar-icon">
              <Envelope />
            </span>
            <span className="navbar-icon">
              <Gear />
            </span>
            <span className="navbar-icon">
              <Bell />
            </span>
          </div>
          <img src={profileImage} className="profile-icon" alt="profile" title="Profile" />
        </div>
      
    </Navbar>
  );
}

export default Header;
