import React, { ReactElement, ReactNode } from 'react';
import './App.css';

import Navbar from './Navbar';
import {Blurb} from './Blurb/Blurb';

function App() {
  return (
    <>
      <Blurb heading='Reimu Hakurei' subtitle='Pro. Beyond.' image='reimu.png'/>
      <Blurb heading='Patchouli Knowledge' subtitle='Big and Bigger.' image='patchouli.png' isWhite={true}/>
      <Blurb heading='Reisen' subtitle='Supercharged by M2 Pro and M2 Max' image='reisen.png'/>
      <Navbar />

    </>
  );
}

export default App;