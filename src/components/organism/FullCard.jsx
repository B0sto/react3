import React from "react";
import Recommendation from "../moleculs/Recommendation";
import Image from "../atoms/Image"

const FullCard = () => {
  return (
    <div className="container">
      <Recommendation />
      <Image/>
    </div>
  );
};

export default FullCard;
