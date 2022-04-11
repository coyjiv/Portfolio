import React from "react";
import CardWrapper from "../CardWrapper/CardWrapper";
import { Portfolio } from "./styled";

const PortfolioCards = (props) => {
  return (
    <Portfolio id={props.id}>
      <CardWrapper />
    </Portfolio>
  );
};

export default PortfolioCards;
