// MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

function MainPage() {
  return (
    <Container className="text-center mt-5">
      <h1>Hackaton React</h1>
      <Row className="mt-3">
        <Col>
          <Link to="/navbar">
            <Button variant="primary">Mirrored Navbar</Button>
          </Link>
        </Col>
        <Col>
          <Link to="/progress">
            <Button variant="primary">Progress with Input</Button>
          </Link>
        </Col>
        <Col>
          <Link to="/verification">
            <Button variant="primary">Input Verification</Button>
          </Link>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Link to="/password-generator">
            <Button variant="primary">Password Generator</Button>
          </Link>
        </Col>
        <Col>
          <Link to="/timer">
            <Button variant="primary">Timer</Button>
          </Link>
        </Col>
        <Col>
          <Link to="/rick-and-morty">
            <Button variant="primary">Rick and Morty Queries</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default MainPage;
