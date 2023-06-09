import RadarChart from "components/Charts/RadarChart";
import BottomNav from "components/Navbar/bottom-nav";
import RangeSlider from "components/RangeSlider";
import StackendColumn from "components/StackendColumn";
import ChartContext from "context/chartContext";
import React, { useContext } from "react";

function MyLifeQoL() {
  const { setMultiply } = useContext(ChartContext);
  const handleSliderChange = (newValue, title) => {
    setMultiply({
      title: title,
      value: newValue,
    });
  };

  return (
    <div className="w-full h-vh bg-black">
      <BottomNav />
      <div className="w-full p-5 flex">
        <div className="w-1/2">
          <RadarChart />
        </div>
        <div className="text-white ml-10">
          <RangeSlider
            title={"energy"}
            onSliderChange={handleSliderChange}
          />
          <RangeSlider
            title={"urban"}
            onSliderChange={handleSliderChange}
          />
          <RangeSlider
            title={"health"}
            onSliderChange={handleSliderChange}
          />
          {/* <button>Click Me</button> */}
        </div>
      </div>

      <div className="w-full px-10 pb-10">
        <StackendColumn />
      </div>
    </div>
  );
}

export default MyLifeQoL;
