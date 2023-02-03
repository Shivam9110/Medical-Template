import React from 'react';

import { BrowserRouter, Routes, Route, } from "react-router-dom";


import Test from "./Test";
import Logo from "./Logo";
import Third from './Third';
import Treatment from './Treatment';
import Location from './Location';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Test />
        <Logo />
        <Third />
        <Treatment />
        <Location />
      </BrowserRouter>
    </>
  );
}
export default App;

