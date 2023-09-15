import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';
import { Route, Routes } from 'react-router';

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
        <Route path='/signin-signup' element={<SignInSignUp/>}/>
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
