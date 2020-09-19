import React from "react";
import { Card, CardInformation, CardImage } from './Style.js';

const HomeCard = (props) => {
  return (
    <Card>
      <CardInformation>
        <h2>{props.title}</h2>
        <h5>{props.model === true ? "Serial #" : "Model #"}</h5>
        <p>{props.id}</p>
      </CardInformation>
      <CardImage style={{ backgroundImage: `url(${props.image}` }}></CardImage>
    </Card>
  )
}

export default HomeCard;