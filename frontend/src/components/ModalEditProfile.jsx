import React from 'react'

//Css
import "./../styles/Profile-styles.css"

//React bootstrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";

//React hot toast
import toast, { Toaster } from 'react-hot-toast';

function ModalEditProfile(props) {
  const [newData, setnewData]=React.useState({
    tel:"",
    facebook:"",
    instagram:""
  })

  function handleChange(e) {
    setnewData({
      ...newData,
      [e.target.name]:e.target.value
    })

    console.log(newData)
  }

  function handleSubmit(e) {
    e.preventDefault()

    if(newData.tel===""&&newData.facebook ===""&&newData.instagram===""){
      
      toast.error('Los campos están vacios!',{
        duration:4000,
        position:'center',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      })
    }else{
          console.log(newData)
          
              setTimeout(() => {
                setnewData({tel:"",facebook:"", instagram:""});
                props.onHide()
              }, 1);

              toast.success('Los cambios se han guardado!',{
                duration:3500,
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
      <Form.Group className="mb-2" controlId="formBasicTeléfono">
        <Form.Label>Teléfono:</Form.Label>
        <Form.Control type="text" value={newData.tel} name="tel" onChange={handleChange} placeholder="Nuevo número" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicFacebook">
        <Form.Label>Facebook:</Form.Label>
        <Form.Control type="text" value={newData.facebook} name="facebook" onChange={handleChange} placeholder="Nuevo enlace" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicInstagram">
        <Form.Label>Instagram:</Form.Label>
        <Form.Control type="text" value={newData.instagram} name="instagram" onChange={handleChange} placeholder="Nuevo enlace" />
      </Form.Group   >
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

export default ModalEditProfile