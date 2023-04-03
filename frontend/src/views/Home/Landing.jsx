import Logo from "../../assets/logo-home.svg";
import {
  AppStore,
  Calendar,
  Car,
  Check,
  Checklist,
  Clock,
  Cross,
  GPlay,
  GreenCar,
  Like,
  Marker,
  Money,
  Route,
  Schedule,
  Share,
  TiredEye,
} from "../../assets/images";
import Carousel from "../../components/Carousel";

const Home = () => {
  return (
    <>
      <div className="container w-auto m-auto">
      <div className="header text-center">
        <h1 className="text-3xl font-bold flex justify-center items-center mt-5 ">
          ¿Que es <img className="w-60" src={Logo} alt="juntas" />?
        </h1>
        <h5 className="text-2xl font-thin mt-5">
          Es una plataforma que permite{" "}
          <span className="text-green-700">conectar</span> a{" "}
          <span className="text-pink-700">mujeres</span> que viajan en vehículos{" "}
          <br /> propios con aquellas que desean viajar al mismo destino
        </h5>
        <br />
      </div>
      <Carousel />
      <div className="mt-10">
        <h3 className="text-center font-bold text-3xl">+ Ventajas</h3>
        <br />
        <div className="grid grid-cols-2 bg-pink-800 text-white p-20">
          <div className="col-span-1">
            <div className="flex justify-center">
              <img className="w-8 mr-5" src={Money} alt="money-icon" />
              <div>
                <h4 className="font-semibold text-2xl">Ahorro de dinero</h4>
                <p>
                  Cada una puede compartir los costos de gasolina, <br /> peajes
                  y estacionamiento.
                </p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="flex justify-center">
              <img className="w-14" src={TiredEye} alt="tired-eye" />
              <div className="ml-3">
                <h4 className="font-semibold text-2xl">Reducción del estrés</h4>
                <p>Pueden compartir la responsabilidad de conducir.</p>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="flex items-center">
              <img className="w-14 mr-5" src={Schedule} alt="schedule" />
              <div>
                <h4 className="font-semibold text-2xl items-center">
                  Flexibilidad
                </h4>
                <p>
                  Los horarios de salida y llegada se ajustan a tu necesidad.
                </p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="flex justify-center">
              <img className="w-14 mr-5" src={GreenCar} alt="green-car" />
              <div>
                <h4 className="font-semibold text-2xl">
                  Menor impacto ambiental
                </h4>
                <p>
                  Se reduce el número de automóviles en ruta minimizando la
                  emisión de gases por hidrocarburos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 m-auto">
        <h3 className="text-center font-bold text-3xl">¿Cómo funciona?</h3>
        <div className="traveler gradient h-96 p-16">
          <h3 className="text-left font-semibold text-2xl text-white">
            Como viajera
          </h3>
          <br />
          <div className="flex justify-around">
            <div className="flex flex-col items-center justify-center">
              <span className="text-white">¿Donde vas?</span>
              <div className="bg-green w-32 h-32 mt-3 rounded-full flex items-center justify-center">
                <img className="w-10" src={Marker} alt="marker" />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="text-white">¿Cuando?</span>
              <div className="bg-pink-500 rounded-full w-32 h-32 mt-3 p-10">
                <img className="w-10" src={Calendar} alt="calendar" />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="text-white">Filtra tus preferencias</span>
              <div className="bg-green w-32 h-32 mt-3 rounded-full flex items-center justify-center">
                <img className="w-10" src={Check} alt="filter" />
                <img className="w-10" src={Cross} alt="filter" />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="text-white">Elige tu mejor opción</span>
              <div className="bg-pink-700 w-32 h-32 mt-3 rounded-full flex items-center justify-center">
                <img className="w-14" src={Like} alt="like" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
          <img className="w-40" src={Share} alt="share" />
        </div>
        <div className="driver h-96 p-16">
          <h3 className="text-left font-semibold text-2xl text-white">
            Como conductora
          </h3>
          <br />
          <div className="flex justify-around">
            <div className="flex flex-col items-center justify-center">
              <span className="text-white">Tu ruta</span>
              <div className="bg-green w-32 h-32 mt-3 rounded-full flex items-center justify-center">
                <img className="w-14" src={Route} alt="route" />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="text-white">Fecha y hora</span>
              <div className="bg-pink-700 w-32 h-32 mt-3 rounded-full flex items-center justify-center">
                <img className="w-10" src={Clock} alt="clock" />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="text-white">Carga tu auto</span>
              <div className="bg-green w-32 h-32 mt-3 rounded-full flex items-center justify-center">
                <img className="w-10" src={Car} alt="fill-car" />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <span className="text-white">
                Selecciona tus <br /> condiciones
              </span>
              <div className="bg-pink-700 w-32 h-32 mt-3 rounded-full flex items-center justify-center">
                <img className="w-10" src={Checklist} alt="checklist" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="mt-6">
          <h4 className="font-semibold text-2xl text-center">
            Viaja y compartí
          </h4>
          <br />
          <h4 className="font-normal text-xl text-center text-green-600">
            Descargate la App
          </h4>
          <br />
          <div className="flex justify-center space-x-4 mb-10">
            <img className="w-36" src={GPlay} alt="googlePlay" />
            <img className="w-36" src={AppStore} alt="appStore" />
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default Home;
