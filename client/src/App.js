import HomeLayoutHOC from './HOC/Home.HOC';
import React, { Component } from 'react';
import Temp from './Components/temp';

function App(props) {
  return (
    <>
      <HomeLayoutHOC path='/' exact component={Temp} />
    </>
  );
}

export default App;
