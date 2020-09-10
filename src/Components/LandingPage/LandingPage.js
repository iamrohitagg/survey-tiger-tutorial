import React from "react";
import "./_landing_page.css";

import { Link } from "react-router-dom";

const LandingPage = (props) => {
  return (
    <div>
      <div>
        <Link to="/create">
          <button className="landing-page-button"> Create Survey</button>
        </Link>
      </div>
      <div>
        <button className="landing-page-button"> Take Survey</button>
      </div>
    </div>
  );
};

export default LandingPage;
