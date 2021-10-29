import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Facilities from '../Facilities/Facilities';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Facilities></Facilities>
            <About></About>
        </div>
    );
};

export default Home;