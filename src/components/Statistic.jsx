
import React from "react";
import {StatisticContainer, Button} from "./Statistic.styled"


export class Statistic extends React.Component {
    state = {
  good: 0,
  neutral: 0,
  bad: 0
}
    handelIncrementGood=()=> {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
}
        })  
    }
    handelIncrementNeutral=()=> {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,
}
        })  
    }
    handelIncrementBad = () => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
            }
            
        })
        
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }  
    
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        return good/this.countTotalFeedback()*100 ;
     }
    render() {
        return  <StatisticContainer>
      <h2>Please leave feedback</h2>
    <Button type ="button" onClick = {this.handelIncrementGood}>Good</Button>
    <Button type ="button" onClick = {this.handelIncrementNeutral}>Neutral</Button>
    <Button type ="button" onClick = {this.handelIncrementBad}>Bad</Button>
    <h2>Statistic</h2>
            <p>Good: {this.state.good}</p>
            <p>Neutral: {this.state.neutral}</p>
            <p>Bad: {this.state.bad}</p>
            <p>Total: {this.countTotalFeedback()}</p>
            <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
  </StatisticContainer> 
    }
    
}


 