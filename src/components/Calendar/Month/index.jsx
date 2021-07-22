import React from 'react';
import Week from '../Week';
import { format, getWeeksInMonth, getWeek } from 'date-fns';
import { startOfMonth } from 'date-fns/esm';
import styles from './Month.module.scss';
import stylesRoot from './../Calendar.module.scss';
import classNames from 'classnames';

const getWeeks = date => {
    const month = date.getMonth();
    //const firstWeekOfMonth = getWeeks(startOfMonth(date));
    const year = date.getFullYear();
    const firstDayOfMonth = new Date(year, month, 1);
    const firstWeekOfMonth = getWeek(firstDayOfMonth);
    console.log('firstWeekOfMonth :>> ', firstWeekOfMonth);
    const weeks = [];

    for (let i = firstWeekOfMonth;
         i<firstWeekOfMonth + getWeeksInMonth(date);
         i++
        ) {
        weeks.push(<Week key={i} week={i} year={year} />);
    }
    return weeks;
}

function Month(props) {
    const {date} = props;
    return <section className={stylesRoot.right}>
        <table>
            <caption><div>{format(date, 'MMMM, yyyy')}</div></caption>
            <thead><tr>
                <th>S</th>
                <th>M</th>
                <th>T</th>
                <th>W</th>
                <th>T</th>
                <th>F</th>
                <th>S</th>
            </tr></thead>
            <tbody>
                {getWeeks(date)}
            </tbody>
        </table>
    </section>;
}

export default Month;
