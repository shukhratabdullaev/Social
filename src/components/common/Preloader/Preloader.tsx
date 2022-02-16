import React from 'react';
import preLoader from "../../../assets/images/preLoader.svg";



export const Preloader = () => {
    return (
        <div style={{backgroundColor: 'white'}}>
            <img src={preLoader} alt={'Preloader'}/>
        </div>
    );
};

export default Preloader;