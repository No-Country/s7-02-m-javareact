const Home = () => {
  return (
    <>
      <div>
        <br />
        <div className="w-4/5 m-auto my-3">
          <h2 className="inline font-bold text-3xl">Hola Andrea</h2>
          &nbsp;&nbsp;
          <h4 className="inline font-thin text-xl">¡Comenzá tu viaje!</h4>
        </div>

        <br />
        <div className="flex justify-between h-80">
          <div className="passenger-option w-3/6 flex items-center justify-end">
            <a
              href="/start"
              className="text-white text-center no-underline rounded-xl p-3 w-80 bg-[#16A000]"
            >
              Soy pasajera
            </a>
          </div>
          <div className="driver-option w-3/6 flex items-center justify-end">
            <a
              href="/driver"
              className="text-white text-center no-underline rounded-xl p-3 w-80 bg-[#A00A4C]"
            >
              Soy conductora
            </a>
          </div>
        </div>
        <br />
        <div className="text-center mb-10">
          <h3 className="font-semibold text-3xl">
            ¡Mirá todos los viajes activos!
          </h3>
          <h4 className="font-thin text-2xl">
            Conocé a mas viajeras y hacia donde conducen
          </h4>
        </div>
        <br />
      </div>
    </>
  );
};

export default Home;
