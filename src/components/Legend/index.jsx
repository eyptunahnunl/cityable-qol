import clsx from "clsx";
import ChartContext from "context/chartContext";
import React, { useContext } from "react";

function Legend() {
  const { legend } = useContext(ChartContext);
  const legendClass = clsx(
    legend
      ? "bg-white absolute left-3 bottom-2 z-30 p-3"
      : "bg-white absolute left-3 bottom-2 z-30 p-3 hidden"
  );
  return (
    <div className={legendClass}>
      <h4>Quality Of Life Index</h4>
      <div>
        <span
          className="rounded-sm inline-block h-3 mr-1 w-3"
          style={{ backgroundColor: "#723122" }}
        ></span>
        100
      </div>
      <div>
        <span
          className="rounded-sm inline-block h-3 mr-1 w-3"
          style={{ backgroundColor: "#8b4225" }}
        ></span>
        90
      </div>
      <div>
        <span
          className="rounded-sm inline-block h-3 mr-1 w-3"
          style={{ backgroundColor: "#a25626" }}
        ></span>
        80
      </div>
      <div>
        <span
          className="rounded-sm inline-block h-3 mr-1 w-3"
          style={{ backgroundColor: "#b86b25" }}
        ></span>
        75
      </div>
      <div>
        <span
          className="rounded-sm inline-block h-3 mr-1 w-3"
          style={{ backgroundColor: "#ca8323" }}
        ></span>
        70
      </div>
      <div>
        <span
          className="rounded-sm inline-block h-3 mr-1 w-3"
          style={{ backgroundColor: "#da9c20" }}
        ></span>
        65
      </div>
      <div>
        <span
          className="rounded-sm inline-block h-3 mr-1 w-3"
          style={{ backgroundColor: "#e6b71e" }}
        ></span>
        60
      </div>
      <div>
        <span
          className="rounded-sm inline-block h-3 mr-1 w-3"
          style={{ backgroundColor: "#eed322" }}
        ></span>
        55
      </div>
      <div>
        <span
          className="rounded-sm inline-block h-3 mr-1 w-3"
          style={{ backgroundColor: "#f2f12d" }}
        ></span>
        50
      </div>
    </div>
  );
}

export default Legend;
