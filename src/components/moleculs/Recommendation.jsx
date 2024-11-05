import React from "react";
import Header from "../atoms/Header";
import Ad from "../atoms/ad";
import CheckboxIcon from "../atoms/CheckboxIcon";
import Description from "../atoms/Description";
import Email from "../atoms/Email";
import Button from "../atoms/Button";

const Recommendation = () => {
  return (
    <div className="recommendation">
      <Header />
      <Ad />

      <div className="checkbox_container">
        <div>
          <CheckboxIcon />
          <Description description="Product discovery and building what matters" />
        </div>
        <div>
          <CheckboxIcon />
          <Description description="Measuring to ensure updates are a success" />
        </div>
        <div>
          <CheckboxIcon />
          <Description description="And much more!" />
        </div>
      </div>
      <div>
        <Email />
        <Button />
      </div>
    </div>
  );
};

export default Recommendation;
