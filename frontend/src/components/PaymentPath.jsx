import React from 'react'
import {Link} from "react-router-dom";
import { PaypalFrame, bankTransfer, mercadoPagoFrame, warningFrame } from '../assets/images';
const PaymentPath = () => {
  return (
    <div className='w-full my-5'>
        <div className='grid grid-cols-1 md:block'>
        <span><Link to={"/home"} className='text-black mx-3'>Home</Link></span>
        <span> {'>'} </span>
        <span><Link to={"/home"} className='text-black mx-3'>Donde Viajo</Link></span>
        <span> {'>'} </span>
        <span><Link to={"/home"} className='text-black mx-3'>Opciones</Link></span>
        <span> {'>'} </span>
        <span><Link to={"/home"} className='text-black mx-3'>Viaje Elegido</Link></span>
        <span> {'>'} </span>
        <span><Link to={"/home"} className='text-black mx-3'>Reserva de Viaje</Link></span>
        </div>
        
        <div className='w-full  grid grid-cols-1 md:grid-cols-12 mt-7'>
            <div className='col-span-12 md:col-span-3'>
                <h2 className='font-bold mb-[4rem]'>Medios de Pago</h2>
                <div className='w-full flex flex-column items-center justify-center'>
                    <div>
                        <img src={PaypalFrame} alt='paypal-image'/>
                    </div>
                    <div>
                        <img src={mercadoPagoFrame} alt='paypal-image'/>
                    </div>
                    <div>
                        <img src={bankTransfer} alt='paypal-image'/>
                    </div>
                </div>
            </div>

            <div className='col-span-12 md:col-span-9 flex items-center justify-center'>
                <div className='border-[#3BED1E] flex flex-rows md:flex-col items-center justify-center p-3' style={{backgroundColor:"#D9D9D9", borderColor:"#3BED1E"}}>
                    <div className='mx-1 my-2'>
                        <img src={warningFrame} alt='warning-frame' />
                    </div>
                    <p className='mx-1'>
                        Recuerda que si cancelas el servicio se te cobrará la reserva. 
                        ¡Tienes hasta 24 horas antes del viaje para cambiar de idea! 
                        La conductora debe saber con anticipación para re-organizar su viaje.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentPath