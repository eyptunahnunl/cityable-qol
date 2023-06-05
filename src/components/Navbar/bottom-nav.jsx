import {
  NavLink,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleNav = () => {
    if (location.pathname === "/") {
      navigate("/mylifequality");
    } else {
      navigate("/");
    }
  };
  return (
    <div className="absolute flex justify-center items-center bottom-0 h-8 w-full">
      <div className="flex justify-center items-center bg-[#ffffff4d] rounded-lg p-1 pl-5 pr-5 gap-5 border backdrop-filter: blur(2.5px) shadow-lg text-sm text-white ">
        <button
          className="hover:text-green-50"
          onClick={handleNav}
        >
          {location.pathname === "/mylifequality"
            ? "Istanbul QoL"
            : "MyLife Quality"}
        </button>
        <NavLink className="hover:text-green-50" to={"/"}>
          More Information..
        </NavLink>
      </div>
    </div>
  );
}

export default BottomNav;
