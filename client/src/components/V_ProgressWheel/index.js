import "./style.css";

// VICTORY STUFF
import React from "react";
import * as V from "victory";

import { VictoryPie, VictoryChart, VictoryAxis } from "victory";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

function init() {
  return (
    <div className="pie-size">
      <VictoryPie
        colorScale={["blue", "orange", "gold", "cyan", "navy"]}
        data={[
          { x: "Cats", y: 35 },
          { x: "Dogs", y: 40 },
          { x: "Birds", y: 55 },
        ]}
      />
    </div>
  );
}

export default init;
