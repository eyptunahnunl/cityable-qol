import { Rose } from "@ant-design/plots";
import MainContext from "context/mapContext";
import React, { useContext } from "react";
import { PieChartData } from "utils/dataFilter";

function RadarChart() {
  const { activeDistrict } = useContext(MainContext);
  const data = PieChartData(activeDistrict)[0];
  const config = {
    data,
    xField: "type",
    yField: "value",
    seriesField: "type",
    radius: 0.7,
    label: {
      offset: -10,
    },
    legend: {
      position: "left",
    },
  };
  return <Rose {...config} width={250} height={380} />;
}

export default RadarChart;
