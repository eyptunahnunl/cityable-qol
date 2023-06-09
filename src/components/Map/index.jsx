import MainContext from "context/mapContext";
import maplibregl from "maplibre-gl";
import {
  useContext,
  useRef,
  useMemo,
  useEffect,
} from "react";
function Map({ children }) {
  const { setMapState } = useContext(MainContext);

  const containerRef = useRef(null);
  const bounds = useMemo(
    () => [
      [27.56, 40.65], // Southwest coordinates
      [30.18, 41.64], // Northeast coordinates
    ],
    []
  );
  useEffect(() => {
    const map = new maplibregl.Map({
      container: "map",
      style:
        "https://api.maptiler.com/maps/streets-v2-dark/style.json?key=OZLtjwtB56gzrUBj7cYd", // stylesheet location
      center: [29.0206640479916, 40.9976649305711],
      zoom: 9,
      bearing: 10,
      pitch: 0,
      maxPitch: 85,
      maplibreLogo: false,
      attributionControl: true,
      bounds: bounds,
    });
    setMapState(map);
  }, []);
  const mapContainerStyle = {
    width: "100%",
    height: "100vh",
    position: "absolute",
  };

  return (
    <>
      <div
        ref={containerRef}
        className="map"
        id="map"
        style={mapContainerStyle}
      >
        {children}
      </div>
    </>
  );
}

export default Map;
