import React from 'react';
import classNames from 'classnames';
import styles from './Day.module.scss';
import { isToday } from 'date-fns';

function Day(props) {
    const { date, monthStyle } = props;
    return  isToday(date) ? 
            <td className={styles.currDay}> {date.getDate()}</td> :
            <td className={styles[monthStyle]}>{date.getDate()}</td>;
}

export default Day;
