import React from 'react'
import { Link } from 'react-router-dom'

function SelectedTrip() {
  return (
    <div className='selected_trip_container'>
        <div className='container_row_one h-1/5 flex'>
                <div className='column_one ' >
                    <div className='user_info'>
                        <img src='https://randomuser.me/api/portraits/women/29.jpg' ></img>
                        <span>Conduce hacia tu destino<strong>Viernes de 28 de abril</strong></span>
                    </div>
                </div>
                <div className='column_two flex '>
                    <div className='available flex-col w-3/6'>
                        <span>Apurate</span>
                        <br/>
                        <span>Queda 1 lugar disponible</span>
                        <div  className="w-[175px] h-6 bg-gray-200 rounded-full items-center ">
  <div style={{backgroundColor:"blue", width:"45%"}} className="h-6 rounded-full text-white"></div>
  </div>
                    </div>
                </div>
        </div>
        <div className='container_row_two h-4/5'>
<div className='map'></div>
<div className='column' >
    <span>El recorrido de Maria</span>
    <div></div>
    <div className='amount'>
        <span>Reservalo por:</span>
        <div className='price'></div>
    </div>
    <button><Link to='/myprofile' >Reservar</Link></button>
</div>
        </div>

    </div>
  )
}

export default SelectedTrip