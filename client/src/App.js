import HomeLayoutHOC from './HOC/Home.HOC';
import React, { Component } from 'react';
import Temp from './Components/temp';
import Master from './Components/master'

function App(props) {
  return (
    <>
      <HomeLayoutHOC path='/' exact component={Temp} />
      <HomeLayoutHOC path='/:type' exact component={Master} />
    </>
  );
}

export default App;