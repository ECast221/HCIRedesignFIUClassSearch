import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const courseNames = ["Calculus I", "Natural Science I", "Natural Science II", "Programming I", "Introduction to Computing",
"Professional and Technical Writing","Calculus II", "Physics I",  "Discrete Math",  "Discrete Structures", "Programming II",
"Technology in the Global Arena", "Physics II", "Computer Architecture", "Data Structures", "Software Engineering I",
"Statistics", "Operating Systems", "Systems Programming", "Senior Project"];

const ModalTag = (props) => {
  const {
    buttonLabel,
    className,
    courseNames
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="success" onClick={toggle} style={{float: 'right', marginRight: '30%', paddingLeft: '60px', paddingRight: '60px'}}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>You have selected</ModalHeader>
        <ModalBody>
            
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalTag;