import React from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import FormInput from '../forminput/FormInput';
import Button from '../button/Button';
import './SignIn.scss'
class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value })

    }

    handleSubmit = async  (e) =>{
        e.preventDefault();
        const { email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email: '',
                password: ''
            })
        }catch(error){
            console.log(error);
        }


        this.setState({email:'', password:''})
    }

  render(){
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput name='email' type='email' label='Email' value={this.state.email} handleChange={this.handleChange} />
                <FormInput name='password' type='password' label='Password' value={this.state.password} handleChange={this.handleChange}/>
                <div className='buttons'>
                    <Button type='submit'>Sign In</Button>
                    <Button onClick={signInWithGoogle}  isGoogleSignIn>
                        {' '}
                        Sign In in with Google
                        {' '}
                    </Button>
                </div>
            </form>
        </div>
      )
  }
}

export default SignIn;