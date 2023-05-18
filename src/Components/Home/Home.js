import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import Table from './Table/Table';
import Slider from './Slider/Slider';
import Programme from './Programme/Programme';
import CrossfitProgramme from './Programme/CrossfitProgramme/CrossfitProgramme';
import SecondProgramme from './Programme/SecondProgramme';
import ThirdProgramme from './Programme/ThirdProgramme';

const Home = () => {


    return (
        <div>
            <Header />
            {/* Work Schedule */}
            <About />
            <Table />
            <CrossfitProgramme />
            <>
                <Programme />
                <SecondProgramme />
                <ThirdProgramme />
            </>
            <Slider />
            <SpecialOffer />
            <Contact />
            {/* <Footer /> */}
        </div>
    );
};

export default Home;