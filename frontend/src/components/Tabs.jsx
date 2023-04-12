import { useState } from "react";
import "./../styles/Profile-styles.css";

//Components
import Documents from "./Documents";
import NoteItem from "./NoteItem";

//React- bootstrap 
import Dropdown from 'react-bootstrap/Dropdown';

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const [driver, setDriver]=useState(1)

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const toggleDriver=(index)=>{
    setDriver(index)
  }

  return (
    <div className="tabs-container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
         Documentos
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Mis calificaciones
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Mis Viajes
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
            <Documents/>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="flex items-center justify-between" >
          <div className="flex  w-full items-center justify-between" >
          <button
             onClick={() => toggleDriver(1)}
             style={{borderTopLeftRadius:"16px", borderBottomLeftRadius:"16px", boxShadow:"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}
              className={driver===1? "tab-btn p-2 w-3/6 active-btn":"tab-btn p-2 w-3/6"} >Como conductora</button>
          <button
                 onClick={() => toggleDriver(2)}
                 style={{borderBottomRightRadius:"16px", borderTopRightRadius:"16px",boxShadow:"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}
                  className={driver===2? "tab-btn p-2 w-3/6 active-btn":"tab-btn p-2 w-3/6"}>Como pasajera</button>    
          </div>
          </div>
        <div className="calificacion-container">
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
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;