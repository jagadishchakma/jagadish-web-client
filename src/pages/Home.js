import React from 'react';
import Footer from '../components/Common/Footer';
import NavMenu from '../components/Common/NavMenu';
import HomeAbout from '../components/Home/HomeAbout';
import HomeBlog from '../components/Home/HomeBlog';
import HomeProject from '../components/Home/HomeProject';
import HomeService from '../components/Home/HomeService';
import HomeSkill from '../components/Home/HomeSkill';
import HomeSlider from '../components/Home/HomeSlider';
import Zoom from 'react-reveal/Zoom';

const Home = () => {
    return (
        <div className="homeBg">
            
            <header className="homeHeader">
                <NavMenu bg="none" position="fixed-top"/>
                <Zoom>
                    <HomeSlider/>
                </Zoom>
            </header>
            <HomeService/>
            <div className="homeMain">
                <HomeProject/>
                <HomeSkill/>
                <HomeAbout/>
                <HomeBlog/>
                <Footer/>
            </div>
        </div>
    );
};

export default Home;