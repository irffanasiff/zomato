import React from 'react';
import FoodTab from '../Components/FoodTab';
import Navbar from '../Components/Navbar';

const HomeLayout = (props) => {
  return (
    <>
      <Navbar />
      <FoodTab />
      <div className='container mx-auto'>{props.children}</div>
      
    </>
  );
};

export default HomeLayout;
