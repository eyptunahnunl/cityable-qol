import { createContext, useState } from "react";

const ChartContext = createContext();

export const ChartProvider = ({ children }) => {
  const [chart, setChart] = useState("Environment");
  const [nav, setNav] = useState(true);
  const [choropleth, setChoropleth] = useState(false);
  const [legend, setLegend] = useState(true);
  const data = {
    chart,
    setChart,
    nav,
    setNav,
    choropleth,
    setChoropleth,
    legend,
    setLegend,
  };
  return (
    <ChartContext.Provider value={data}>
      {children}
    </ChartContext.Provider>
  );
};
export default ChartContext;
