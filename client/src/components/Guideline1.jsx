// src/components/Guideline1.jsx

import React from 'react';
import AnimatedText from './AnimatedText';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

function Guideline1() {
  return (
    <Modal isOpen={true} centered>
      <ModalHeader>Guidelines</ModalHeader>
      <ModalBody>
        <AnimatedText />
      </ModalBody>
    </Modal>
  );
}

export default Guideline1;
