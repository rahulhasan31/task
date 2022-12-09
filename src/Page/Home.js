import React from 'react';
import Category from '../Shared/Category/Category';
import About from '../Shared/Extra/About';
import Extra from '../Shared/Extra/Extra';
import Fresh from '../Shared/Fresh/Fresh';
import MostRecent from '../Shared/MostRecent';
import Slider from '../Shared/Slider';
import TopSelling from '../Shared/TopSelling';


const Home = () => {
    return (
        <div>
          <Slider></Slider>
          <TopSelling></TopSelling>
          <Category></Category>
          <MostRecent></MostRecent>
          <Fresh></Fresh>
          <Extra></Extra>
          <About></About>
       
        </div>
    );
};

export default Home;