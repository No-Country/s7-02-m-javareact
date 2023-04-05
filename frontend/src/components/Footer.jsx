import { Envelope } from "../assets/images";
// import Logo from "../../assets/logo-home.svg";
import Logo from "../assets/logo-home.svg";

const Footer = () => {
  return (
    <div className="bg-black px-6 py-3">
      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 text-white h-52 sm:h-auto items-center">
        <div className="w-full">
          <img className="w-64" src={Logo} alt="logo" />
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:mb-3">
            <h6 className="text-md font-bold">Home</h6>
            <ul>
              <li>Perfil</li>
              <li>Mis calificaciones</li>
            </ul>
          </div>
          <div className="sm:mb-3">
            <h6 className="text-md font-bold">Mis viajes</h6>
          </div>
          <div className="sm:mb-3">
            <h6 className="text-md font-bold">Búsqueda</h6>
            <ul>
              <li>Soy pasajera</li>
              <li>Conduzco</li>
            </ul>
          </div>
          <div className="sm:mb-3">
            <h6 className="text-md font-bold">Contacto</h6>
            <ul>
              <li className="flex">
                <img className="mr-2" src={Envelope} alt="envelope" />
                <a href="mailto:consultas@juntas.com">consultas@juntas.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center sm:justify-start md:justify-center h-auto underline">
          <ul>
            <li>
              <a href="/">Términos y condiciones</a>
            </li>
            <li>
              <a href="/"></a>Política de privacidad
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
