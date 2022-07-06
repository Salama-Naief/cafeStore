import React from 'react';
import Navbar from './Navbar';
import Arrival from './Arrival';
import CardItems from './CardItems';
import Subscribe from './Subscribe';
import ContanctItem from './ContactItem';
import Footer from './Footer';

const Home = () => {
    return (
        <div className='app'>
    
        <Arrival/>
        <CardItems/>
        <Subscribe/>
        <ContanctItem/>
      
      </div>
    );
}

export default Home;
