import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaBars } from 'react-icons/fa';

import './LandingPage.css';
import zipFile from '../../assets/buildy.zip';

import NAV_LOGO from '../../assets/nav_logo.svg';

export default function LandingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenuIfLargerThan991px = () => {
        if (window.innerWidth > 991) {
          setIsMenuOpen(false);
        }
      };
    
      // Add an event listener for window resize
      useEffect(() => {
        window.addEventListener('resize', closeMenuIfLargerThan991px);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', closeMenuIfLargerThan991px);
        };
      }, []);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    
  return (
   <>
    <header className={`${isMenuOpen ? 'active' : ''}`}>
            <Container className=''>
            <Row className='justify-content-between align-items-center'>
                <Col xs = 'auto' lg = '2'>
                    <div className='row align-items-center'>
                        <div className='col-3'><img className='w-' src={NAV_LOGO} alt="Navbar Logo" /></div>
                        <div className='col navlogo_text'>HelpMeOut</div>
                    </div>
                </Col>
                <div className={`navbar_links ${isMenuOpen ? 'active' : ''} d-lg-none`}>
                    <ul>
                        <li className='mb-3'><a href="#" className='nav_middle_text'>Features</a></li>
                        <li className='mb-3'><a href="#" className='nav_middle_text'>How it Works</a></li>
                        <li className='mb-3'><a href="#" className='nav_end_text'> Get Started</a></li>
                    </ul>
                </div>
                <Col xs = 'auto' className="navbar-toggle d-lg-none" onClick={toggleMenu}>
                    <FaBars />
                </Col>
                <Col className='d-none d-lg-block' lg = '3'>
                    <div className='row justify-content-center' style={{gap:'40px'}}>
                        <div className='col-auto p-0 nav_middle_text'>Features</div>
                        <div className='col-auto p-0 nav_middle_text' style={{whiteSpace:''}}>How it Works</div>
                    </div>
                </Col>
                <Col lg = '2' className='nav_end_text d-none d-lg-block'>
                    Get Started
                </Col>
            </Row>
        </Container>
    </header>

    <Container className='mt-5'>
        <Row className='justify-content-center'>
            <Col>
            <div>
                <p>Click the link below to download the zipped file:</p>
                <a href={zipFile} download><Button>Download the zipped file</Button></a><br/>
                <p>Note, For now it only works on tabs with loaded http/https website</p><br/>
                <p>When it starts to record, click on the extension icon again, if you want to stop recording</p>
            </div>
            </Col>
        </Row>
    </Container>
   </>
  )
}
