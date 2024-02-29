import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ParcelasModal = ({ isOpen, onRequestClose, onSubmit }) => {
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
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Selecione o número de parcelas"
  >
    <h2>Selecione o número de parcelas</h2>
    <select value={parcelas} onChange={handleChange}>
      <option value={1}>1 parcela</option>
      <option value={2}>2 parcelas</option>
      <option value={3}>3 parcelas</option>
      <option value={4}>4 parcelas</option>
      {/* Adicione mais opções de parcelas conforme necessário */}
    </select>
    <button onClick={handleSubmit}>Confirmar</button>
  </Modal>
  );
};

export default ParcelasModal;
