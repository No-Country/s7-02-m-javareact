import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalContinue = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Lista para la aventura!?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Teniendo en cuenta las preferencias y el destino seleccionado, a
          continuación veras una lista de viajes disponibles que cumplan tus
          necesidades, para luego llevar a cabo la reserva.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalContinue;
