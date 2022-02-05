
import React from 'react';
import './App.css';

import Landing from './components/landing';
import WhatWeDo from './components/whatwedo';
import Metrics from './components/metrics';
import Navbar from './components/navbar';
import Form from './components/form';
import Footer from './components/footer';

function App() {
  return (
    <div className="container">
      <Landing/>
      <Navbar/>
      <WhatWeDo/>
      <WhatWeDo/>
      <Footer/>
    </div>
  );
}

export default App;

