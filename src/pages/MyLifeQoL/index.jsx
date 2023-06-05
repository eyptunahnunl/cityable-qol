import RadarChart from "components/Charts/RadarChart";
import BottomNav from "components/Navbar/bottom-nav";
import RangeSlider from "components/RangeSlider";
function MyLifeQoL() {
  return (
    <div className="flex flex-row w-vh h-vh bg-black">
      <h1 className="text-white">DEVAM EDECEK</h1>
      <RadarChart />
      <div className="text-white w-full h-full top-1/2 relative ">
        <RangeSlider />
      </div>
      <BottomNav />
    </div>
  );
}

export default MyLifeQoL;
