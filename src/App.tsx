import React, { ReactElement, ReactNode } from 'react';
import './App.css';

import Navbar from './Navbar';
import MainTopic from './MainTopic';
import Blurb from './Blurb/Blurb';

function App() {
  return (
    <>
      <Blurb heading='Header.' subtitle='text, subtitles.'/>
      <Blurb heading='Yea.' subtitle='even more stuff.'/>
      <Navbar />

    </>
  );
}

export default App;