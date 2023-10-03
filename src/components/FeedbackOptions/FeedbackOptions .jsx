import { Button } from "../FeedbackOptions/FeedbackOptions.styled";

export const FeedbackOptions = ({onGood, onNeutral, onBad}) => (
    <div>
    <Button type ="button" onClick = {onGood}>Good</Button>
    <Button type ="button" onClick = {onNeutral}>Neutral</Button>
    <Button type ="button" onClick = {onBad}>Bad</Button>
  </div>

)