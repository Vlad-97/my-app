import React from 'react';
import PropTypes from 'prop-types';
import './Loading.css';

const Loading = (props) => {
    const { width, height } = props;
    console.log(height)
    return (
        <div 
            className="Loading"
            style={{ width ,height }}
        />
    )
}
Loading.defaultProps = {
    width: '56px',
    height: '56px'
}
Loading.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
};
  
export default Loading;