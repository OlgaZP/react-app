import React from 'react';
import { format } from 'date-fns';
import classNames from 'classnames';
import styles from '../Calendar.module.scss';


function CurrentDate() {
    const currDate = new Date();
    return <section className={styles.left}>
        <div style={{ textTransform: "uppercase"}}>{format(currDate, 'EEEE')}</div>
        <div style={{ fontSize: "8em" }}>{format(currDate, 'd')}</div>        
    </section>;
}

export default CurrentDate;

