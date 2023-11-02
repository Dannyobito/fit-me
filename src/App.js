import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import './App.css';
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import { Route, Routes, Navigate } from 'react-router';

class App extends React.Component {
  
  unsubscribeFromAuth = null;
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth=>{
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
            currentUser : {
              id: snapShot.id, 
              ...snapShot.data()
            }
          },()=>{console.log(snapShot,snapShot.data())})
        })
        ;
      }
      else{
        setCurrentUser(userAuth)
      }
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path='/signin-signup' element={this.props.currentUser ? <Navigate to="/" replace /> : <SignInSignUp/>}/>
          <Route path='*' element={<h1>Not Found</h1>}/>
          <Route path='/checkout' element={<CheckoutPage/>}/>

        </Routes>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
