import React from "react";
import { Cont, Item, Hidden } from "./styled";
import BoldText from "../BoldText/BoldText";

const Card = (props) => {
  const {
    url,
    background,
    name,
    color,
    fsize,
    addRules,
    cardRules,
    info,
    infoSize,
  } = props;

  const toggleClass = (event) => {
    event.stopPropagation();

    if (event.target.nodeName === "DIV") {
      event.target.children[0].classList.toggle("cardAnim");
    }
  };
  return (
    <Cont
      onClick={() => window.open(url, "_blank")}
      onMouseOver={toggleClass}
      onMouseOut={toggleClass}
    >
      <Item background={background} cardRules={cardRules}>
        <BoldText
          content={name}
          size={fsize}
          color={color}
          addRules={addRules}
        />
        <Hidden infoSize={infoSize}>{info}</Hidden>
      </Item>
    </Cont>
  );
};

export default Card;
