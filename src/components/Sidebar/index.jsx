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
      <div className="flex flex-col text-white   bg-primaryBlack h-full">
        <div className="flex justify-between h-[10%] text-lg">
          <div className="flex items-center mx-auto">
            <span className="text-lg">
              Quality of Life Istanbul
            </span>
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

        <div className="flex flex-col items-center pb-2  h-[10%]">
          <h5 className="text-xl font- text-gray-900 dark:text-white">
            <Icon name="index" size={85} />
            {activeDistrict.name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            QoL Index : {activeDistrict.quality}
          </span>
        </div>

        <div className="flex flex-col">
          <div className="mt-3">
            <div className="p-2 ">
              <PieChart />
            </div>
            <div className="px-5 pb-5 ">
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
