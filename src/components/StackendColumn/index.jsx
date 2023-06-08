import { Column } from "@ant-design/plots";
import ChartContext from "context/chartContext";
import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import stackendData from "services/stackendData.json";
// import { multiplyDataByType } from "utils/helper";
function StackendColumn() {
  const [data, setData] = useState([]);

  const { multiply } = useContext(ChartContext);

  useEffect(() => {
    setData(stackendData);
  }, []);

  // console.log("value", value);
  // useEffect(() => {
  //   const newdata = data.map(entry => {
  //     if (entry.type === multiply.title) {
  //       return {
  //         ...entry,
  //         value: entry.value * multiply.value,
  //       };
  //     }
  //     return entry;
  //   });
  //   console.log("newdata", newdata);
  //   setData(newdata);
  // }, [multiply]);

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
