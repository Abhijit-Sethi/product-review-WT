import React from "react";
import successity from "../successity.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-wrapper">
      <div className="text-wrapper">
        <div className="text-header-wrapper">
          <p className="text-header font__p p__size">Welcome To The Most Promising Product Review HUB</p>
        </div>

        <div className="text-section font__p p__size">
          <br />
          <br></br>If You have thought about :
          <ul>
            <li>Which Product to buy?</li>
            <li>Why to buy product A over B?</li>
            <li>Or simply need a community to talk to</li>
          </ul>
          Your one stop for anything and everything to do with Products.
          <br></br>
          <br/>

          <div className="text-button-wrapper">
            <br/>
            <Link to="/register">Register NOW </Link>
          </div>
        </div>
      </div>
      <div className="image-wrapper">
        <img src={successity} className="landing-image" alt="" />
      </div>
    </div>
  );
};

export default LandingPage;