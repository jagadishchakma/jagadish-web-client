import React, { useState } from "react";
// Import module and default styles
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import VisibilitySensor from "react-visibility-sensor";



const Progress = () => {
    const [percentage, sePercentage] = useState(0);
    setTimeout(() => {
        sePercentage(20);
      }, 1000)
    return (
      <VisibilitySensor>
        {({ isVisible }) => {
          return (
            <div className="circle-progress">
              <h4>Experience</h4>
              <CircularProgressbar
                value={percentage}
                text="2 Years"
              />
            </div>
          );
        }}
      </VisibilitySensor>
    );
}

export default Progress;
