import React from 'react';
import About from '../components/Home/About/About';
import Banner from '../components/Home/Banner/Banner';
import Contact from '../components/Home/Contact/Contact';
import Projects from '../components/Home/Projects/Projects';
import Service from '../components/Home/Service/Service';
import Footer from '../Share/Footer/Footer';


const Home = () => {
    return (
        <>
            <title>Portfolio-Home</title>
            <Banner />
            <Service />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;