import React,{useState} from 'react'


//React Bootsrap
//import Dropdown from "react-bootstrap/dropdown";
import Fade from "react-bootstrap/Fade";
import Accordion from 'react-bootstrap/Accordion';

//Icons
import { edit, movil, cake, instagram, facebook, dniFront, dniBack, carnetBack, carnetFront } from '../../assets/images';

//React-redux
import { useSelector } from 'react-redux';

//Components
import NoteItem from '../../components/NoteItem';
import Tabs from "../../components/Tabs"
import ModalEditProfile from '../../components/ModalEditProfile';
import ModalEditProfilePic from '../../components/ModalEditProfilePic';

function MyProfileView() {
  const [open, setOpen] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShowPic, setModalShowPic]=React.useState(false)
  const {currentUser} = useSelector((state)=>state.user)

  return (
    <>
    <ModalEditProfile
       show={modalShow}
       onHide={() => setModalShow(false)}
    />
    <ModalEditProfilePic show={modalShowPic} onHide={()=>setModalShowPic(false)} />
    <div  className="profile-container flex max-sm:flex-col overflow-x-hidden items-start justify-center"  >
      <div style={{ alignSelf:"center"}} className='container-column flex-col justify-around items-center w-2/6
            pt-5
            p-3 max-sm:w-11/12  max-sm:p-0' >
              <h2 style={{textAlign:"center"}} >Mi perfil</h2>
        <div style={{borderBottom:"0.09px solid gray", marginBottom:"15px"}} className='flex-col items-center' >

               <div style={{boxShadow:"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}} className='myprofile-data relative pt-2 rounded-lg' >
                  <img style={{borderRadius:"50%", border:"2px solid #3BED1E "}} src={`https://randomuser.me/api/portraits/women/90.jpg`} alt='woman-pic' ></img>
                  <span style={{fontSize:"30px"}}><strong>Camila Sosa</strong></span>
                  <img onClick={() => setModalShowPic(true)} style={{position:"absolute",top:"10px", left:"70%", height:"20px", cursor:"pointer"}} src={edit} alt="edit_icon.svg" ></img>
                </div>
        <div style={{margin:"none", borderTop:"0.09px solid gray"}} className='userdata-container relative flex-col mt-3' >
            <ul className='p-4  md:p-6'  >
                   <li className='flex pb-2' >
                  <img className='pr-4'  src={movil} alt="cellphone-icon"></img>
                      1197545698
                    </li>
                    <li className='flex pb-2 ' >
                      <img className='pr-4'  style={{height:"20px"}} src={cake} alt="cake-icon"></img>
                      14/06
                    </li>
                    <li className='flex pb-2 ' >
                       <img className='pr-4'  src={facebook} style={{height:"22px"}} alt="facebook-icon"></img>
                        facebook.com/miperfiljuntas
                    </li>
                    <li className='flex pb-2' >
                        <img className='pr-4'  src={instagram} alt="instagram-icon.svg"></img>
                            @miperfiljuntas
                    </li>
            </ul>
                   <img onClick={() => setModalShow(true)} style={{position:"absolute",top:"10px", left:"90%", height:"20px", cursor:"pointer"}} src={edit} alt="edit_icon.svg" ></img>

        </div>
              </div>
        {
          /**
           * 
           * <div       onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open} style={{width:"80%", borderRadius:"10px"}} className="select-container flex justify-between items-center px-3" >
          <h4>Mis Calificaciones</h4>
      <Dropdown>
            <Dropdown.Toggle style={{backgroundColor:"#fff",border:"none", height:"30px", color:"black"}} variant="success" id="dropdown-basic">
            </Dropdown.Toggle>

            <Dropdown.Menu align="end" >
              <Dropdown.Item href="#/action-1">Mas recientes</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Mejores calificaciones</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Menor costo</Dropdown.Item>
            </Dropdown.Menu>
    </Dropdown>
        </div>
    <Fade in={open}>
    <div id="example-fade-text" className="calificacion-container w-5/6 overflow-y-auto">
          <NoteItem/>
          <NoteItem/>
          <NoteItem/>
          <NoteItem/>
          <NoteItem/>
          <NoteItem/>
          <NoteItem/>
          <NoteItem/>
          <NoteItem/>
          <NoteItem/>
          <NoteItem/>
          <NoteItem/>
        </div>
      </Fade>
           */
        }
        </div>
            <div className='container-column flex-col items-center w-4/6  max-sm:w-11/12  max-sm:p-0' >
            <Tabs/>
            </div>
    </div>
    </>
  )
}

export default MyProfileView