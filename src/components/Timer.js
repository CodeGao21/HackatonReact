import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';

function Timer() {
  const [time, setTime] = useState(0); // Estado para almacenar el tiempo
  const [isRunning, setIsRunning] = useState(false); // Estado para controlar si el temporizador está corriendo

  // Efecto para manejar el temporizador
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1); // Incrementa el tiempo cada segundo
      }, 1000);
    }
    return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta o deja de correr
  }, [isRunning]);

  // Función para iniciar el temporizador
  const handleStart = () => {
    setIsRunning(true);
  };

  // Función para detener el temporizador
  const handleStop = () => {
    setIsRunning(false);
  };

  // Función para resetear el temporizador
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <Container className="text-center mt-5">
      <h1>Timer: {time} seconds</h1>
      <div className="mt-3">
        <Button variant="success" onClick={handleStart} className="me-2">
          Start
        </Button>
        <Button variant="warning" onClick={handleStop} className="me-2">
          Stop
        </Button>
        <Button variant="danger" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </Container>
  );
}

export default Timer;
