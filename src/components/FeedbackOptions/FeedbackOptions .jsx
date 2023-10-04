import React from "react";
import { Button, ButtonContainer } from "../FeedbackOptions/FeedbackOptions.styled";

export const FeedbackOptions = ({onGood, onNeutral, onBad}) => (
    <ButtonContainer>
    <Button type ="button" onClick = {onGood}>Good</Button>
    <Button type ="button" onClick = {onNeutral}>Neutral</Button>
    <Button type ="button" onClick = {onBad}>Bad</Button>
  </ButtonContainer>

)
