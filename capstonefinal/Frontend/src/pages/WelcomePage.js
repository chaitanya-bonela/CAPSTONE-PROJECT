import React, { useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import AppNavbar from '../components/Navbar';

const WelcomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.backgroundColor = '#FFD700'; 
    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, []);

  return (
    <>
      <AppNavbar />
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
       
          <h2>Welcome to the Event Management System!</h2>
          
          
        
      </Container>
    </>
  );
};

export default WelcomePage;
