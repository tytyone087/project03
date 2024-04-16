import React from 'react';
import MainSlider from '../components/MainSlider.jsx';
import Section02 from '../components/Section02.jsx';
import Section03 from '../components/Section03.jsx';
import Section04 from '../components/Section04.jsx';
import Section05 from '../components/Section05.jsx';
import Section06 from '../components/Section06.jsx';
import Top from '../components/Top.jsx';


const MainPage = () => {

    return (
        <div id='mainContainerPC'>
            <Top />
            <MainSlider />
            <div id="contents"  className='main_contents'>
                <div className="pc_main_contents">
                    <Section02 />
                    <Section03 />
                    <Section04 />
                    <Section05 />
                    <Section06 />
                </div>
            </div>
            
        </div>
    );
};

export default MainPage;