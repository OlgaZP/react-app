import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './NotFound.module.scss';
import imageNotFound from '../../common/images/404-image.jpg';

function NotFound(props) {
    const history = useHistory();    
    
    return (
        <div class={styles.divNotFound}>            
            <h2> Ooops! The page has lost in Space! </h2>
            <img src={imageNotFound} alt="404 image" />
            <button onClick={() => history.goBack()}>Go back...</button>
        </div>
    )
}

export default NotFound;
