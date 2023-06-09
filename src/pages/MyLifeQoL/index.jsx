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
        <div className="text-white ml-10 flex">
          <div>
            <RangeSlider
              title={"Energy"}
              onSliderChange={handleSliderChange}
            />
            <RangeSlider
              title={"Urban"}
              onSliderChange={handleSliderChange}
            />
            <RangeSlider
              title={"Health"}
              onSliderChange={handleSliderChange}
            />
            <RangeSlider
              title={"Transportation"}
              onSliderChange={handleSliderChange}
            />
            <RangeSlider
              title={"Security"}
              onSliderChange={handleSliderChange}
            />
            <RangeSlider
              title={"Economy"}
              onSliderChange={handleSliderChange}
            />
          </div>
          <div className="ml-4">
            <RangeSlider
              title={"Education"}
              onSliderChange={handleSliderChange}
            />
            <RangeSlider
              title={"Population"}
              onSliderChange={handleSliderChange}
            />
            <RangeSlider
              title={"Housing"}
              onSliderChange={handleSliderChange}
            />
            <RangeSlider
              title={"Governance"}
              onSliderChange={handleSliderChange}
            />
          </div>
          <div className="ml-4">
            <RangeSlider
              title={"Environment"}
              onSliderChange={handleSliderChange}
            />
          </div>
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
