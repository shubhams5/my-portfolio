import React from "react";
import Slide from "react-reveal/Slide";

function Progress(props) {
  return (
    <div className="progress">
      <div className="bar-tag">{props.barTag}</div>
      <Slide left>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: props.width + "%" }}
          aria-valuenow={props.ariaVoluenow}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <span className="bar-percentage">{props.percentage}</span>
        </div>
      </Slide>
    </div>
  );
}

export default Progress;
