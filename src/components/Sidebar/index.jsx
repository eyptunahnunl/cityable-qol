import BarChart from "components/Charts/BarChart";
import PieChart from "components/Charts/PieChart";
import MainContext from "context/mapContext";
import { useContext } from "react";
import { Icon } from "utils/Icons";
import ChartContext from "context/chartContext";

function Sidebar() {
  const { activeDistrict } = useContext(MainContext);
  const { chart, nav, setNav } = useContext(ChartContext);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      className={
        nav
          ? "fixed right-1  w-[30%] h-screen  ease-in-out duration-500  z-10 bg-primaryBlack"
          : "fixed right-[-100%] bg-primaryBlack"
      }
    >
      <div className="flex flex-col text-white  bg-primaryBlack h-full font-sans">
        <div className="flex justify-between h-[10%] text-lg">
          <div className="flex items-center mx-auto">
            <div className="text-2xl">
              Quality of Life Istanbul
            </div>
          </div>
          <span className="p-2">
            <div
              className="cursor-pointer"
              onClick={handleNav}
            >
              <Icon name="close" />
            </div>
          </span>
        </div>

        <div className="flex-row flex h-[10%] items-center ml-14 w-full">
          <Icon name="index" size={100} />
          <div className="text-left w-1/2 p-2 text-xl ml-7">
            {activeDistrict.name}
            <div className="">
              QoL Index :
              <div className=" text-4xl text-green-700">
                {Math.round(activeDistrict.quality)}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="">
            <div className=" ">
              <PieChart />
            </div>
            <div className="px-5 ">
              <div className="justify-center text-center">
                {chart}
              </div>
              <BarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
