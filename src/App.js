import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';
import { auth } from './firebase/firebase.utils';
import { Route, Routes } from 'react-router';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
       currentUser: null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user);
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path='/signin-signup' element={<SignInSignUp/>}/>
          <Route path='*' element={<h1>Not Found</h1>}/>
        </Routes>
      </div>
    );
  }
}

export default App;
