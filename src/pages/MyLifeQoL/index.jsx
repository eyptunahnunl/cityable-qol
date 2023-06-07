import RadarChart from "components/Charts/RadarChart";
import BottomNav from "components/Navbar/bottom-nav";
import RangeSlider from "components/RangeSlider";
import StackendColumn from "components/StackendColumn";
import React from "react";

function MyLifeQoL() {
  return (
    <div className="w-full h-vh bg-black">
      <BottomNav />
      <div className="w-1/2">
        <RadarChart />
      </div>
      <div className="w-full p-5">
        <StackendColumn />
      </div>
    </div>
  );
}

export default MyLifeQoL;
