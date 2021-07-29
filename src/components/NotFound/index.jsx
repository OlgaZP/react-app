import React from 'react';
import styles from './NotFound.module.scss';
import imageNotFound from '../../common/images/404-image.jpg';

function NotFound(props) {
    // const {history} = props;
    // setTimeout( () => {
    //     history.push('/');
    // }, 5000);
    
    return (
        <div class={styles.divNotFound}>            
            <h2> Ooops! The page has lost in Space! </h2>
            <img src={imageNotFound} alt="404 image" />
            <button>Go home...</button>
        </div>
    )
}

export default NotFound;
