import Legend from "components/Legend";
import Map from "components/Map";
import Navbar from "components/Navbar";
import BottomNav from "components/Navbar/bottom-nav";
import Sidebar from "components/Sidebar";
import React from "react";
import MapOperations from "utils/mapOperations";

function IstanbulQoL() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Map>
        <MapOperations />
        <Legend />
      </Map>
      <BottomNav />
    </>
  );
}

export default IstanbulQoL;
