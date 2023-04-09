import React from 'react'

//React rating
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

function NoteItem() {

    const Star = (
        <path d="M62 25.154H39.082L32 3l-7.082 22.154H2l18.541 13.693L13.459 61L32 47.309L50.541 61l-7.082-22.152L62 25.154z" />
      ); // Source: https://www.svgrepo.com/svg/353297/star
        

    const customStyles = {
        
        itemShapes: Star,
        activeFillColor: '#3BED1E',   
        inactiveFillColor: '#D9D9D9',

      };

  return (
    <div className='item-container m-1 mb-4 flex-col items-center relative'>
        <div className='rating flex items-center justify-around'>
            <span style={{fontSize:"12px"}} className='p-1' >Maneja con mucha seguridad y es muy atenta</span>
            <Rating
      style={{ maxWidth: 180 }}
      value={3}
      itemStyles={customStyles}
      readOnly
    />
        </div>
        <div className='userdata-rating p-2'>
            <div className='userinfo flex items-center p-1'>
                <img src="https://randomuser.me/api/portraits/women/29.jpg" alt="user_pic"></img>
                <span>Ana Gonzalez</span>
            </div>
            <p>Viajó con María de <strong>Mendoza a San Luis</strong> el 14/04/2023 a las 17hs</p>
        </div>
        <button>Ver ruta</button>
    </div>
  )
}

export default NoteItem