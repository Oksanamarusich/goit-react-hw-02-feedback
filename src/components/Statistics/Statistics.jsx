
import React from "react";
import { StatisticsTitle, StatisticsContainer, StatisticsText } from "../Statistics/Statistics.styled"
import {Notification} from "../Notification/Notification";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <StatisticsContainer>
        {total === 0 ? <Notification
            message="There is no feedback" />
            : <><StatisticsText>Good: {good}</StatisticsText>
                <StatisticsText>Neutral: {neutral}</StatisticsText>
                <StatisticsText>Bad: {bad}</StatisticsText>
                <StatisticsText>Total: {total}</StatisticsText>
                <StatisticsText>Positive feedback: {positivePercentage}%</StatisticsText></>} 
    </StatisticsContainer>
            
)

