import React from 'react'
import { welcomeImage } from '../../../assets/images'

const WelcomeToApp = () => {
  return ( 
    <div className='w-full h-screen flex items-center flex-col justify-start pt-40 text-center  bg-cover bg-center' style={{backgroundImage:`url(${welcomeImage})`}} >
        <h2 className='font-bold text-[3rem]'>¡Bienvenida!</h2>
        <h3 className='text-2rem'>Te registraste exitosamente</h3>
        <div className="text-center mt-10">
            <button
            type="submit"
            className="text-white bg-[#ED1E79] shadow-lg  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:hover:bg-[#f0428f]"
            >
            Continuar
            </button>
        </div>
    </div>
  )
}

export default WelcomeToApp