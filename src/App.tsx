import React, { ReactElement, ReactNode } from 'react';
import './App.css';

import Navbar from './Navbar';
import Blurb from './Blurb/Blurb';

function App() {
  return (
    <>
      <Blurb heading='iPhone 14 Pro' subtitle='Pro. Beyond.' isWhite={false}/>
      <Blurb heading='iPhone 14' subtitle='Big and Bigger.' isWhite={true}/>
      <Navbar />

    </>
  );
}

export default App;