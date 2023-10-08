import React from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions ";
import { Statistics } from "./Statistics/Statistics";


export class App extends React.Component {
    state = {
  good: 0,
  neutral: 0,
  bad: 0,
}
    leaveFeedback = option => {
        this.setState(prevState => {
            return {
                [option]: prevState[option] + 1,
            };
        });
    };

countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }  
    
countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        return Math.round((good*100)/this.countTotalFeedback());
     }
     
    render() {
        return <div>
            <Section title="Please leave feedback">
                <FeedbackOptions
                       options={Object.keys(this.state)}
                onLeaveFeedback={this.leaveFeedback} />
    
            </Section>
            <Section title = "Statistics">
                <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()} /> 
                </Section>
            
    
        </div>
        
                
    }
}


 









// export const App = () => {
//   return (
//     <div>
//       <Feedback />
//     </div>
//   );
// };
