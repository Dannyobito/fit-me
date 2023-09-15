import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import { Route, Routes } from 'react-router';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
        <Route path='/shop/hats' element={<>Hats</>}/>
        <Route path='/shop/jackets' element={<>jackets</>}/>
        <Route path='/shop/sneakers' element={<>sneakers</>}/>
        <Route path='/shop/womens' element={<>womens</>}/>
        <Route path='/shop/mens' element={<>mens</>}/>
        <Route path='*' element={<>Not found</>}/>
      </Routes>
    </div>
  );
}

export default App;
