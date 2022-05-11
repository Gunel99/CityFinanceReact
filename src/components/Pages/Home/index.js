import React from 'react';
import Header from './Header';
import Services from './Services';
import Bround from './Bround';
import ForYou from './ForYou';


const Home = () => {
  return (
    <React.Fragment>
    <Header />
    <Services />
    <Bround />
    <ForYou />
    </React.Fragment>
  )
}

export default Home;