import React, { useContext } from "react";
import { Pie } from "@ant-design/plots";
import MainContext from "context/mapContext";
import ChartContext from "context/chartContext";
import { PieChartData } from "utils/dataFilter";

function PieChart() {
  const { activeDistrict } = useContext(MainContext);
  const { setChart } = useContext(ChartContext);

  console.log("activeDistrict", activeDistrict);
  const data = PieChartData(activeDistrict)[0];
  const config = {
    appendPadding: 10,
    data,
    height: 350,
    width: 150,
    style: {
      shadowOffsetX: 50,
      shadowOffsetY: 150,
    },
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) =>
        `${(percent * 100).toFixed(0)}%`,
      style: {
        textAlign: "center",
      },
    },
    pieStyle: {
      lineWidth: 1,
      stroke: "#414141",
    },
    interactions: [
      {
        type: "element-selected",
      },
    ],
    onReady: graph => {
      graph.on("plot:click", e => {
        setChart(e.data?.data.type);
      });
    },
  };

  return <Pie {...config} animation={false} />;
}

export default PieChart;
