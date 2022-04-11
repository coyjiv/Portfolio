import React from "react";
import Card from "../Card/Card";
import { CardC } from "./styled";
import { cards } from "../../constants/cards";

const CardWrapper = (props) => {
  return (
    <CardC>
      {cards.map((card, index) => (
        <Card
          url={card.url}
          name={card.name}
          color={card.name}
          fsize={card.fsize}
          infoSize={card.infoSize}
          info={card.info}
          addRules={card.addRules}
          cardRules={card.cardRules}
          key={index}
        />
      ))}
    </CardC>
  );
};

export default CardWrapper;
