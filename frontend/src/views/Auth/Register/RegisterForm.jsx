import React from 'react'
import woman from "../../../assets/Vector.svg";
import pastel from "../../../assets/pastel.svg";
import movil from "../../../assets/movil.svg";
import facebook from "../../../assets/facebook.svg";
import instagram from "../../../assets/instagram.svg";
import dni from "../../../assets/dni.svg";
import imagedni from "../../../assets/image-dni.svg";

function RegisterForm() {
  return (
    <form className='w-full bg-[#D9D9D9] py-3 px-10 rounded-[20px]'>
      <h2 className='text-center text-black font-blod text-[1.5rem]'>¡Crea tu Cuenta</h2>

      <div>
        <label htmlFor="nombre" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
        <div className="flex mb-2">
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <img src={woman} />
          </span>
          <input type="text" id="nombre" className="rounded-none rounded-r-lg   text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
      </div>

      <div>
      <label htmlFor="apellido" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
      <div className="flex mb-2">
        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <img src={woman} />
        </span>
        <input type="text" id="apellido" className="rounded-none rounded-r-lg   text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      </div>

      <div>
      <label htmlFor="cumpleanos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cumpleaños</label>
      <div className="flex mb-2">
        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <img src={pastel} />
        </span>
        <input type="text" id="cumpleanos" className="rounded-none rounded-r-lg   text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      </div>

      <div>
      <label htmlFor="telefono" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">teléfono</label>
      <div class="flex mb-2">
        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <img src={movil} />
        </span>
        <input type="text" id="telefono" class="rounded-none rounded-r-lg   text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      </div>

      <div>
      <label htmlFor="facebook" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link</label>
      <div class="flex mb-2">
        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <img src={facebook} />
        </span>
        <input type="text" id="facebook" class="rounded-none rounded-r-lg   text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      </div>

      <div>
      <label htmlFor="instagram" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link</label>
      <div class="flex mb-2">
        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <img src={instagram} />
        </span>
        <input type="text" id="instagram" class="rounded-none rounded-r-lg   text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      </div>

      <p className='text-center text-black mt-4'>Para completar tu perfil, debes cargar tu Documento Nacional de Identidad</p>

      <div className='flex mt-5 w-full px-1'>
        <div className=' flex items-center justify-center'>
          <img src={dni} alt='dni' />
          <span className='text-black mx-2'>DNI</span>
        </div>

        <div class="flex items-center justify-center w-full">
          <label for="frontal" class="flex flex-col items-center justify-center   border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <img src={imagedni} />
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="fronal" type="file" class="hidden" />
          </label>
        </div> 

        <div class="flex items-center justify-center w-full">
          <label for="trasero" class="flex flex-col items-center justify-center  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <img src={imagedni} />
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="trasero" type="file" class="hidden" />
          </label>
        </div> 
        
      </div>
      

      <div className='text-center mt-10'>
      <button type="submit" class="text-white bg-[#ED1E79]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Continuar</button>
      </div>
    
    </form>
  )
}

export default RegisterForm;