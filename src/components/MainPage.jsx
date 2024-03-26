import React from 'react';

import MainSlider from './MainSlider.jsx'
import Section02 from './Section02.jsx';


const MainPage = () => {

    return (
        <div id='mainContainerPC'>
            <MainSlider />
            <div id="contents"  className='main_contents'>
                <div className="pc_main_contents">
                    <Section02 />
                </div>
            </div>
            
        </div>
    );
};

export default MainPage;