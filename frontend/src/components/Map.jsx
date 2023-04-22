import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { buildRoute, getDistance } from "../js/functions";

const containerStyle = {
  width: "100%",
  height: "700px",
};

const center = {
  lat: -35.21771789700376,
  lng: -65.30470872298973,
};

const Map = ({ start, end }) => {
  const validateLocations = (start, end) => {
    return Object.values(start).length > 1 && Object.values(end).length > 1;
  };

  const traceRoute = async () => {
    const distanceInfo = await getDistance(start, end);
    const directions = await buildRoute(start, end);
  };

  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
        {validateLocations(start, end) ? (
          <>
            <MarkerF position={start} />
            <MarkerF position={end} />
          </>
        ) : (
          console.log("test")
        )}
      </GoogleMap>
    </LoadScript>
  );
};
export default Map;
