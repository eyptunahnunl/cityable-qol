import { Column } from "@ant-design/plots";
import React, { useEffect, useState } from "react";
import thematicData from "services/thematicIndex.json";
import stackendData from "services/stackendData.json";
function StackendColumn() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const datas = thematicData.map(data => {
      return {
        id: data.districtid,
        type: "environment",
        name: data.district,
        value: data.environmentScore,
      };
    });
    console.log(datas);
    setData(stackendData);
  }, []);

  useEffect(() => {
    function multiplyDataByType(input, type) {
      return stackendData.map(function (entry) {
        if (entry.type === type) {
          return {
            ...entry,
            value: entry.value * input,
          };
        }
        return entry;
      });
    }

    const newData = multiplyDataByType(20, "population");
    console.log("type", newData);
  });

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
    label: {
      position: "middle",
      layout: [
        {
          type: "interval-adjust-position",
        },
        {
          type: "interval-hide-overlap",
        },
        {
          type: "adjust-color",
        },
      ],
    },
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
        console.log(e.data.data.id);
      });
    },
  };
  return <Column {...config} height={350} />;
}

export default StackendColumn;
