import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ParcelasModal = ({ show, handleClose }) => {
  const [parcelas, setParcelas] = useState(1);

  const handleChange = (event) => {
    setParcelas(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode fazer o que quiser com o número de parcelas selecionado
    console.log("Número de parcelas selecionado:", parcelas);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Selecione o número de parcelas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formParcelas">
            <Form.Label>Número de Parcelas</Form.Label>
            <Form.Control as="select" value={parcelas} onChange={handleChange}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              {/* Adicione mais opções conforme necessário */}
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Selecionar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ParcelasModal;
