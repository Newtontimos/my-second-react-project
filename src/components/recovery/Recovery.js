import React from "react";
import "./RecoveryStyles.css";

const Recovery = () => {
  return (
    <div className="recovery">
      <div className="container">
        <div className="content">
          <h2>
            <span>Data</span>
            Recovery
          </h2>
          <p>
            Maintaining data availability contributes to your organization’s
            business continuity and disaster recovery plan, which is an
            important element of your data protection plan that relies on backup
            copies stored in a separate location. Having access to these copies
            minimizes downtime for your employees and keeps their work on track.
          </p>
          <div>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
