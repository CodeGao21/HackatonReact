import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function InputVerification() {
  // Estados para manejar los valores de los inputs
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [age, setAge] = useState('');

  // Estado para manejar el mensaje de verificación
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(true);

  // Función para manejar la verificación de inputs
  const handleVerification = () => {
    if (username === '' || fullname === '' || age === '' || isNaN(age) || age <= 0) {
      setMessage('Por favor, completa todos los campos correctamente.');
      setIsValid(false);
    } else {
      setMessage('Los datos son válidos.');
      setIsValid(true);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          {/* Campo de entrada para Username */}
          <Form.Group className="mb-3">
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Ingresa tu nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
            />
          </Form.Group>

          {/* Campo de entrada para Fullname */}
          <Form.Group className="mb-3">
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Ingresa tu nombre completo"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)} 
            />
          </Form.Group>

          {/* Campo de entrada para Age */}
          <Form.Group className="mb-3">
            <Form.Label>Edad</Form.Label>
            <Form.Control 
              type="number" 
              placeholder="Ingresa tu edad"
              value={age}
              onChange={(e) => setAge(e.target.value)} 
            />
          </Form.Group>

          {/* Botón de verificación */}
          <Button onClick={handleVerification}>Verificar</Button>

          {/* Mensaje de verificación */}
          {message && (
            <Alert variant={isValid ? 'success' : 'danger'} className="mt-3">
              {message}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default InputVerification;
