import { Column } from "@ant-design/plots";
import ChartContext from "context/chartContext";
import MainContext from "context/mapContext";
import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import stackendData from "services/stackendData.json";
// import { multiplyDataByType } from "utils/helper";
function StackendColumn() {
  const [data, setData] = useState([]);
  const { activeDistrict } = useContext(MainContext);
  const { setChart } = useContext(ChartContext);
  const { multiply } = useContext(ChartContext);

  useEffect(() => {
    setData(stackendData);
  }, []);

  const config = {
    data,
    isStack: true,
    xField: "name",
    yField: "value",
    style: {
      shadowOffsetX: 0,
      shadowOffsetY: 10,
    },
    seriesField: "type",
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
    onReady: graph => {
      graph.on("plot:click", e => {
        console.log(e?.data?.data.id);
      });
    },
  };
  return <Column {...config} height={350} />;
}

export default StackendColumn;
