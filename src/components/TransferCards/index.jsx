import React from "react";

import Tilt from "react-parallax-tilt";

export default function TransferCards({ textArray }) {
  const card = (headerText, pText) => {
    return (
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.3}
        glareColor="#5356D9"
        glarePosition="all"
        glareBorderRadius="15px"
      >
        <div class="item">
          <h4 class="header">{headerText}</h4>
          <p class="text">{pText}</p>
        </div>
      </Tilt>
    );
  };

  return textArray.map((textObject) => card(textObject.header, textObject.p));
}
