import { createContext, useState } from "react";
const MainContext = createContext({});

export const MainProvider = ({ children }) => {
  const [mapState, setMapState] = useState(null);
  const [activeDistrict, setActiveDistrict] = useState({
    id: 1421,
    name: "Kadıköy",
    quality: "67.17473",
  });

  const data = {
    mapState,
    setMapState,
    activeDistrict,
    setActiveDistrict,
  };

  return (
    <MainContext.Provider value={data}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
