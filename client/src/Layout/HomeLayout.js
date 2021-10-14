import React from 'react';
import FoodTab from '../Components/FoodTab';
import Navbar from '../Components/Navbar';

const HomeLayout = (props) => {
  return (
    <>
      <Navbar />
      <div className='container mx-auto'>{props.children}</div>
      <FoodTab />
    </>
  );
};

export default HomeLayout;
