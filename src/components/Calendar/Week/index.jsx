import { parse, addDays, isThisMonth } from 'date-fns';
import React from 'react';
import Day from '../Day';

const getDaysOfWeek = (week, year) => {
    const startOfWeek = parse(`${year} ${week}`, 'Y w', new Date());
    const days = [];
    for (let i=0; i<7; i++) {
        const dateIndex = addDays(startOfWeek, i);
        days.push(
            isThisMonth(dateIndex) ? 
                <Day date={dateIndex} monthStyle={'currMonth'}/> :
                <Day date={dateIndex} monthStyle={'otherMonth'}/>
        );
    }

    return days;
};

function Week(props) {
    const { week, year } = props;

    const startOfWeek = parse(`${year} ${week}`, 'Y w', new Date());
    
    return <tr>{getDaysOfWeek(week, year)}</tr>;
}

export default Week;
