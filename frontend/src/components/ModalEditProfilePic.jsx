import React, { useState } from 'react'

//Css
import "./../styles/Profile-styles.css"

//React bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";

//React hot toast
import toast, { Toaster } from 'react-hot-toast';

function ModalEditProfilePic(props) {
    const [pic, setPic]=useState(null);

    const fileInputRef = React.useRef(null);
    
  function handleChange(e) {

        // Get the selected file
        const file = e.target.files[0];
        setPic(file)
        console.log(file);
    
    
  }

  const handleButtonClick = () => {
    // Open the file input dialog
    fileInputRef.current.click();
  };

  function handleSubmit(e) {
    e.preventDefault()

    if(pic===null){
      
      toast.error('Los campos están vacios!',{
        duration:3500,
        position:'center',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })

      return;
    }else{
          console.log(pic)
          
              setTimeout(() => {
                setPic({pic:""});
                props.onHide()
              }, 1);

              toast.success('Los cambios se han guardado!',{
                duration:4000,
                position:'bottom-center',
                style: {
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff',
                },
              })
    }
  }


    return (
        <>
        <Toaster/>
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Editar perfil
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={handleSubmit} >
          <Form.Group className="mb-2" controlId="formBasicPic">
            <Form.Label>Imagen:</Form.Label>
            <Form.Control type="file" onChange={handleChange} ref={fileInputRef} name="pic" placeholder="Nuevo número" />
          </Form.Group>
          <Button style={{backgroundColor:"#FF3A90"}} variant="primary" type="submit">
            Guardar Cambios
          </Button>
        </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button style={{backgroundColor:"gray"}} onClick={props.onHide}>Cancelar</Button>
          </Modal.Footer>
        </Modal>
        </>
      );
}

export default ModalEditProfilePic