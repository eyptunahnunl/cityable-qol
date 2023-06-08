import { createContext, useEffect, useState } from "react";
import stackendData from "services/stackendData.json";

const ChartContext = createContext();

export const ChartProvider = ({ children }) => {
  const [chart, setChart] = useState("Environment");
  const [nav, setNav] = useState(true);
  const [choropleth, setChoropleth] = useState(false);
  const [legend, setLegend] = useState(true);
  const [multiply, setMultiply] = useState({
    title: "urban",
    value: 1,
  });
  const [value, setValue] = useState(stackendData);

  const data = {
    multiply,
    setMultiply,
    chart,
    setChart,
    nav,
    setNav,
    choropleth,
    setChoropleth,
    legend,
    setLegend,
    value,
    setValue,
  };
  return (
    <ChartContext.Provider value={data}>
      {children}
    </ChartContext.Provider>
  );
};
export default ChartContext;
