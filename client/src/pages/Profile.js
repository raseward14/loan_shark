// import React, { useState, useEffect } from "react";
import ProfileCard from "../components/ProfileCard/index";
import V_PieChart from "../components/V_PieChart/index";
// import V_ProgressWheel from "../components/V_ProgressWheel/index";
import V_BarGraph from "../components/V_BarGraph/index";
import "./style.css";

// VICTORY STUFF
import React from "react";
// import * as V from "victory";

function init() {
  return (
    <div>
      <ProfileCard />
      <div className="profile-flex-box">
        <V_PieChart />
        <V_BarGraph />
      </div>
      {/* <V_ProgressWheel /> */}
    </div>
  );
}

export default init;
