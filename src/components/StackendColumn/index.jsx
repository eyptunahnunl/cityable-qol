import { Column } from "@ant-design/plots";
import React, { useEffect, useState } from "react";

function StackendColumn() {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json"
    )
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    data,
    isStack: true,
    xField: "year",
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
  };
  return <Column {...config} height={350} />;
}

export default StackendColumn;
