import React from 'react'
import { Logo, accountCreatedImage, imageCreated  } from "../../../assets/images";

import Loader from '../../../components/Loader';


const AccountCreated = () => {

    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(()=>{
        setTimeout(() => {
            setIsLoading(false)
          }, 3500);
    },[])

    return (
    <>

        <div className='w-full px-[1rem]'>
        <div className='grid grid-cols-12 grid-rows-1'>
            <div className='hidden md:block md:col-span-6 w-full h-screen bg-cover bg-center' style={{backgroundImage:`url(${imageCreated})`}} >
                
                <div className='w-full h-full flex items-start justify-center pt-40'>
                    <h2 className='text-white font-light texter justify-center text-[1.5rem] text-center'>Permite <span className='font-bold'>mitigar</span> los <span className='font-bold'>Gastos</span>que implican los vehiculos</h2>
                </div>
            </div>
            <div className='col-span-12 md:col-span-6 flex justify-center items-center h-screen'>

                <div className='text-center shadow-md py-6 px-7'>
         {
            isLoading? (
                <Loader/>
            ):
            (
                <>
                           <div className='text-center mb-10'>
                        <img src={Logo} alt='logo' className='mx-auto' />
                    </div>
                    
                    <div className='flex items-center justify-center mb-10' >
                        <img src={accountCreatedImage} alt='cuenta creada' style={{width:"4rem"}} className='mx-4' />
                        <span className='font-bold'>Cuenta Creada</span>
                    </div>
                    <p className='text-center font-thin font text-lg mb-9'>¡Te enviamos un Email!</p>
                    <p className='mb-10'>Debes activar tu cuenta con el link que enviamos a tu correo</p>
                    <div className="text-center mt-10">
                        <button
                            type="submit"
                            className="text-white bg-[#ED1E79] shadow-lg  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:hover:bg-[#f0428f]"
                        >
                            Continuar
                        </button>
                    </div>
                </>
            )
         }
                </div>
            </div>
        </div>
    </div>

    </>
   
  )
}

export default AccountCreated;