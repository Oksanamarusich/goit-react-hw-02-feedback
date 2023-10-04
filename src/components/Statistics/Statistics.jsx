import React from "react";
import { StatisticsTitle, StatisticsContainer, StatisticsText } from "../Statistics/Statistics.styled"

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <StatisticsContainer>
        <StatisticsTitle >Statistics</StatisticsTitle>
            <StatisticsText>Good: {good}</StatisticsText>
            <StatisticsText>Neutral: {neutral}</StatisticsText>
            <StatisticsText>Bad: {bad}</StatisticsText>
            <StatisticsText>Total: {total}</StatisticsText>
            <StatisticsText>Positive feedback: {positivePercentage}%</StatisticsText>

    </StatisticsContainer>
)

