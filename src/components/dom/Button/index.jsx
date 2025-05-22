import React from "react";

import style from "./button.module.css";

const defineVariant = (variant) => {
  switch (variant) {
    case "primary":
      return style.buttonPrimary;

    case "ghost":
      return style.buttonGhost;

    case "primary-black":
      return style.buttonPrimaryBlack;

    default:
      return styleDefault;
  }
};

export const Button = ({ children, variant, ...props }) => {
  return <button {...props} className={defineVariant(variant)}>{children}</button>;
};
