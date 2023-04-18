import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "30%",
  height: "400px",
};

const center = {
  lat: -33.86,
  lng: 151.209,
};

const Map = () => {
  <LoadScript googleMapsApiKey="">
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
      // Aqui se puede agregar marcadores, polígonos, etc.
    </GoogleMap>
  </LoadScript>;
};
export default Map;
