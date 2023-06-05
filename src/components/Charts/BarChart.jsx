import { Bar } from "@ant-design/plots";

import useFilter from "hooks/useFilter";
function BarChart() {
  const data = useFilter();

  const config = {
    data,
    height: 260,
    width: 150,
    xField: "value",
    yField: "type",

    style: {
      shadowOffsetX: 0,
      shadowOffsetY: 10,
    },

    interactions: [
      {
        type: "active-region",
        enable: false,
      },
    ],
    xAxis: {
      grid: {
        line: {
          style: {
            stroke: "black",
            lineWidth: 0.001,
            lineDash: [4, 5],
            strokeOpacity: 100,
            shadowColor: "black",
            shadowBlur: 100,
            shadowOffsetX: 5,
            shadowOffsetY: 5,
          },
        },
      },
    },
  };
  return <Bar {...config} />;
}

export default BarChart;
