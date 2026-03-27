import React from "react";

const Stats = () => {
  return (
    <div id="stats">
      <h2>A few more facts about us in numbers</h2>
      <div className="flex">
        <div className="item">
          <div className="item-num">12000+</div>
          <div className="item-label">Hours of play annually</div>
        </div>
        <div className="item">
          <div className="item-num">89%</div>
          <div className="item-label">Player Retention Rate</div>
        </div>
        <div className="item">
          <div className="item-num">1200+</div>
          <div className="item-label">Active Members</div>
        </div>
        <div className="item">
          <div className="item-num">125+</div>
          <div className="item-label">Annual Tournaments</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
