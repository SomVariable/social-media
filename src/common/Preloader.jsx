import React from 'react';
import preloader from '../images/Settings-Loader/256x256.gif'
const Preloader = () => {
    return (
        <div><img src={preloader} style={{width: 50}}/></div>
    );
};

export default Preloader;