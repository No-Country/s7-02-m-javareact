import React from 'react'

//Icons
import { dniFront, dniBack, carnetBack, carnetFront } from '../../assets/images';

function Documents() {
  return (
    <div className='flex-col items-center justify-center' >
        <div style={{borderBottom:"1px solid #BCC2C8"}} className='flex-col pb-2'>
            <h4>D.N.I:</h4>
            <div className='flex justify-around items-center' >
            <img style={{height:"120px", width:"200px"}}  src={dniFront} alt="dni-front/png" ></img>
            <img style={{height:"120px", width:"200px"}}   src={dniBack} alt="dni-back/png" ></img>
            </div>
        </div>
        <div className='flex-col mt-2'>
            <h4>Licencia de conducir:</h4>
            <div className='flex justify-around items-center' >
            <img style={{height:"120px", width:"200px"}}  src={carnetFront} alt='carnet-Back.png' ></img>
            <img style={{height:"120px", width:"200px"}}   src={carnetBack} alt='carnet-front.png' ></img>
            </div>
        </div>
    </div>
  )
}

export default Documents