import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserInfo from './pages/UserInfo';
import MostPopular from './pages/MostPopular';

function App() {
  
  return (
    <BrowserRouter>
      <>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/most-popular' element={<MostPopular />}/>
          </Routes> 
      </>
    </BrowserRouter>
    
  );
}

export default App;
