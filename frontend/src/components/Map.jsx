import {
  GoogleMap,
  LoadScript,
  MarkerF,
  PolylineF,
} from "@react-google-maps/api";
import { buildRoute, getDistance } from "../js/functions";
import { useEffect } from "react";

const containerStyle = {
  width: "100%",
  height: "700px",
};

const center = {
  lat: -35.21771789700376,
  lng: -65.30470872298973,
};

const start = localStorage.getItem("origin");
const end = localStorage.getItem("destination");

const Map = () => {
  const validateLocations = () => {
    return Object.values(start).length > 1 && Object.values(end).length > 1;
  };

  // const directions = await buildRoute(start, end);

  // useEffect(() => {
  //   async function run() {
  //     const distanceInfo = await getDistance(start, end);
  //   }

  //   run();
  // }, []);

  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
        {/* {validateLocations ? ( */}
        <>
          <MarkerF position={start} />
          <MarkerF position={end} />

          <PolylineF
            path={[start, end]}
            options={{
              strokeColor: "black",
              strokeOpacity: 1.0,
              strokeWeight: 4,
              geodesic: true,
              clickable: true,
            }}
          />
        </>
        {/* ) : ( */}
        {/* console.log("test") */}
        {/* )} */}
      </GoogleMap>
    </LoadScript>
  );
};
export default Map;
