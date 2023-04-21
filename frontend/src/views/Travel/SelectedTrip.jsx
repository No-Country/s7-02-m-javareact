import React from 'react'
import { Link } from 'react-router-dom'

//Images and Icons
import { mapaImg } from '../../assets/images';

function SelectedTrip() {

    const completed =50;

  return (
    <div className='selected_trip_container'>
        <div className='container_row_one h-1/5 flex'>
                <div className='column_one ' >
                    <div style={{border:"2px solid red"}} className='user_info flex-col h-full w-10/12'>
                        <div className='flex items-center'>
                        <img className="mr-4" src='https://randomuser.me/api/portraits/women/29.jpg' ></img>
                        <h3><strong>Catalina Gomez</strong></h3>
                        </div>
                        <span className='text-black' >Conduce hacia tu destino: <strong className='text-lg' >Viernes de 28 de abril</strong></span>
                    </div>
                </div>
                <div className='column_two flex '>
                    <div className='available flex-col w-3/6'>
                        <span><strong>Apurate!</strong></span>
                        <span className=' text-black' > {completed < 30 ? "Hay lugar!" : completed < 65? "A la mitad" :completed <80 || completed <99? "Casi lleno": "Completo"}</span>
                        <div  className="w-[175px] h-6 bg-gray-200 rounded-full items-center ">
                            <div style={{backgroundColor:completed < 30 ? "#3BED1E" : completed < 70? "yellow" :"#A00A4C" , width:`${completed}%`}}  className="h-6 rounded-full text-white"></div>
                            </div>
                    </div>
                    <div style={{border:"2px solid blue"}} className='passengers h-full w-3/6' >
                    <div className='flex items-center justify-around'>
                    <img class="w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/women/26.jpg" alt="Rounded avatar"/>
                    <img class="w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/women/17.jpg" alt="Rounded avatar"/>
                    <img class="w-10 h-10 rounded-full" src="https://randomuser.me/api/portraits/women/28.jpg" alt="Rounded avatar"/>
                    </div>
                    <span className='text-sm'>Tres pasajeras ya reservaron</span>
                    </div>
                </div>
        </div>
        <div className='container_row_two h-4/5'>
<div style={{border:"2px solid orange"}} className='map w-2/6 ml-4 '>
    <img className='h-full w-full object-cover' src={mapaImg}></img>
</div>
<div style={{border:"4px dashed purple"}} className='column w-5/6' >
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