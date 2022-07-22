import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserInfo from './pages/UserInfo';

function App() {
  
  return (
    <BrowserRouter>
      <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:username' element={<UserInfo />} />
          </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
