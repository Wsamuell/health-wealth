import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Portal from './component/Portal';
import Render from './component/Render'
import Footer from './component/Footer';



function App() {
  return (
    <div className="">
      <Router>
        <Render />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
