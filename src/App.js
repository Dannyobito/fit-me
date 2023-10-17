import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import './App.css';
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/ShopPage';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import { Route, Routes } from 'react-router';

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
          <Route path='/signin-signup' element={<SignInSignUp/>}/>
          <Route path='*' element={<h1>Not Found</h1>}/>
        </Routes>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps)(App);
