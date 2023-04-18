import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "680px",
};

const center = {
  lat: -33.86,
  lng: 151.209,
};
const conditions = [
  {
    label: "allowPets",
    value: "Petfriendly",
  },
  {
    label: "allowSmoke",
    value: "Acepta fumador",
  },
  {
    label: "bag",
    value: "Equipaje",
  },
  {
    label: "allowKids",
    value: "Acepta niños",
  },
];

const BeginTrip = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <LoadScript googleMapsApiKey="">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={5}
            ></GoogleMap>
          </LoadScript>
        </div>
        <div className="col-md-6">
          <div className="text-center">
            <h2>¿A dónde querés ir?</h2>
            <h5>Buscá a tu conductora</h5>
          </div>
          <br />
          <div className="d-flex justify-content-around">
            <input type="text" placeholder="Desde" />
            <input type="text" placeholder="Hasta" />
          </div>
          <br />
          <input type="date" className="d-flex justify-content-center" />
          <div className="row mt-4">
            <div className="col-md-6">
              <h5>¿Cuántas son?</h5>
              <br />
              <div>
                <label htmlFor="adults">Adultos</label>
                <input className="ml-6" name="adults" type="radio" />
              </div>
              <div>
                <label htmlFor="youngest">Menores</label>
                <input className="ml-4" name="youngest" type="radio" />
              </div>
            </div>
            <div className="col-md-6">
              {conditions.map((c, idx) => {
                return (
                  <div key={idx}>
                    <label htmlFor={c.label}>{c.value}</label>
                    <input className="ml-4" name={c.label} type="checkbox" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeginTrip;
