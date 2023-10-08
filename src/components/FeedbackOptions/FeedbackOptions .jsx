import React from "react";
import { Button, ButtonContainer, ListItem } from "../FeedbackOptions/FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (<ButtonContainer>
    {options.map(option => {
      return (<ListItem key={option}>
        <Button
        key={option}
              type="button"
              value={option}
              children={option}
              onClick={() => onLeaveFeedback(option)}>{option}

        </Button>
      </ListItem>)
     })}
  </ButtonContainer>)
}
  