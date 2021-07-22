//rfcp
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageWrapper.module.scss';

function ImageWrapper(props) {
    const {children, width, height, ...restProps} = props;
    console.dir(restProps);
    const inlineStyle = {
        width: width,
        height: height,
    };
    return (
        <div 
            {...restProps} 
            style={inlineStyle} 
            className={styles.imageContainer} >
            {children}
        </div>
    );
    
}

ImageWrapper.propTypes = {
    children: PropTypes.element.isRequired, 
    width: PropTypes.string.isRequired, 
    height: PropTypes.string.isRequired,
};

export default ImageWrapper;


