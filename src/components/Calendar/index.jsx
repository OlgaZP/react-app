import React, {Component} from 'react';
import CurrentDate from './CurrentDate';
import Month from './Month';
import styles from './Calendar.module.scss';

class Calendar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             date: new Date(),
        }
    }
    
    render () {
        const { date } = this.state;
        return (
            <article>
                {/* <div>Calendar</div> */}
               <CurrentDate />
               <Month date={date}/>  
            </article>
        );
    }
}

export default Calendar;