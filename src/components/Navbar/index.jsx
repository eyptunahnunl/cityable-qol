import "./style.css";
import { Icon } from "utils/Icons";
import clsx from "clsx";
import { useContext } from "react";
import ChartContext from "context/chartContext";
function Navbar() {
  const iconDiv = clsx(
    "bg-black opacity-80 rounded-full w-14 h-14 justify-center flex items-center hover:bg-slate-500 cursor-pointer"
  );
  const {
    nav,
    setNav,
    choropleth,
    setChoropleth,
    legend,
    setLegend,
  } = useContext(ChartContext);
  const handleNav = () => {
    setNav(!nav);
  };

  const handleChoroplet = () => {
    setChoropleth(!choropleth);
  };

  const handleLegend = () => {
    setLegend(!legend);
  };

  return (
    <div className="top-4 left-2 z-10 absolute ">
      <div className=" text-white p-0 items-center h-12 flex gap-1">
        <div>
          <Icon name="logo" />
        </div>
        <div
          className={iconDiv}
          onClick={handleNav}
          title="Sidebar"
        >
          <Icon name="group" />
        </div>
        <div
          className={iconDiv}
          onClick={handleLegend}
          title="legend"
        >
          <Icon name="layer" />
        </div>
        <div
          className={iconDiv}
          onClick={handleChoroplet}
          title="Heat map"
        >
          <Icon name="heat" />
        </div>
        <div className={iconDiv}>
          <Icon name="poi" />
        </div>
        <div
          className={iconDiv}
          title="Go to AirQuality Dashboard "
        >
          <a href="https://cityableairquality.netlify.app/">
            <Icon name="air" size={32} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
