import React from 'react'
import RegisterForm from './RegisterForm';
import Logo from "../../../assets/Recurso 8@2x 2.svg"

const Register = () => {
  return (
    <div className='w-full h-screen grid grid-cols-12 gap-3 bg-white px-[2rem] md:px-[5rem] pt-[5rem]'>

      <div className='col-span-12 md:col-span-6 flex flex-col items-center justify-center px-[4rem]'>
        <img src={Logo} alt='logo' />
        <h2 className=' mt-10 text-black font-light text-[1.5rem] '>Mayor <span className='font-bold'>seguridad</span> <span className='font-bold'>Comodidad</span> <span className='font-bold'> y confianza</span> en cada viaje</h2>
      </div>

      <div className='col-span-12 md:col-span-6 flex items-center justify-center'>
        <RegisterForm/>
      </div>
      
    </div>
  )
}

export default Register
