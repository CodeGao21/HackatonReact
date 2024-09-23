import React, { useState } from 'react';
import { ProgressBar, Container, Row, Col, Form } from 'react-bootstrap';

function ProgressWithInput() {
  // Estado para manejar el valor del porcentaje
  const [percentage, setPercentage] = useState(0);

  // Función para manejar el cambio de valor en el input
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value >= 0 && value <= 100) {
      setPercentage(value); // Actualiza el estado del porcentaje
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          {/* Input para cambiar el porcentaje */}
          <Form.Group>
            <Form.Label>Porcentaje:</Form.Label>
            <Form.Control 
              type="number" 
              value={percentage} 
              onChange={handleInputChange} 
              min="0" 
              max="100" 
              step="1" 
            />
          </Form.Group>
          
          {/* Barra de progreso */}
          <ProgressBar now={percentage} label={`${percentage}%`} />
        </Col>
      </Row>
    </Container>
  );
}

export default ProgressWithInput;
