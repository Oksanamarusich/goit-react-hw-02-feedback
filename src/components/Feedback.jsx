
import React from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions ";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export class Feedback extends React.Component {
    state = {
  good: 0,
  neutral: 0,
  bad: 0,
  visible:false
    }
    
//     show = () => {
//         this.setState({ visible: true });
//     };

//     hide = () => {
//     this.setState({ visible: false });
// }

    handelIncrementGood=()=> {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
                visible:true,
}
        })  
    }
    handelIncrementNeutral=()=> {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,
                visible:true,
}
        })  
    }
    handelIncrementBad = () => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
                visible:true,
            }
            
        })
        
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }  
    
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        return (good*100)/this.countTotalFeedback();
     }
    render() {
        return <Section title="Please leave feedback">
            <FeedbackOptions
                       onGood={this.handelIncrementGood}
                       onNeutral={this.handelIncrementNeutral}
                       onBad = {this.handelIncrementBad} />
    
            
            {this.state.visible && <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()} />}
                     
            {!this.state.visible && <Notification
                message="There is no feedback"></Notification>}
                    
                
        </Section>
                
    }
}


 