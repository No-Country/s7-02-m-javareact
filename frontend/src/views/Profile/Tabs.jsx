import { useState } from "react";
import "./../../styles/Profile-styles.css";

//Components
import Documents from "./Documents";
import NoteItem from "./NoteItem";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

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