import React, { ReactElement, ReactNode } from 'react';
import './App.css';

import Switch, { Route, BrowserRouter, Routes} from 'react-router-dom';

import Navbar from './Navbar';
import {Blurb} from './Blurb/Blurb';
import {ProductPage, Product} from './ProductPage';

function App() {
  var product = new Product('reimu',300,'reimu.png',0);
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/buy' element={<ProductPage product={product}/>}/> 
      </Routes>

    </>
  );
}

function CreateDefaults() {

}

function Home() {
  return (
    <div>
      <Navbar/>
      <Blurb heading='Reimu Hakurei' subtitle='Pro. Beyond.' image='reimu.png'/>
      <Blurb heading='Patchouli Knowledge' subtitle='Big and Bigger.' image='patchouli.png' isWhite={true}/>
      <Blurb heading='Reisen' subtitle='Supercharged by M2 Pro and M2 Max' image='reisen.png'/>
    </div>
  );
}

export default App;