import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { useState, useEffect } from 'react';


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY>50){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    }
    //Add event listener
    window.addEventListener('scroll', onScroll);

    //Remove event listener or it would cause a leak
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
          LOGO OR NAME PLACEHOLDER
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className=""></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink ==='home' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink ==='skills' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')} >Link</Nav.Link>
            <Nav.Link href="#projects" className={activeLink ==='projects' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')} >Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="" className=""><img src="{ }" alt="" /></a>
              <a href="" className=""><img src="{ }" alt="" /></a>
              <a href="" className=""><img src="{ }" alt="" /></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span>

            </button>
          </span>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

