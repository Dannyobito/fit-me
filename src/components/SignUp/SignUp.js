import React from 'react';
import { auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import FormInput from '../forminput/FormInput';
import Button from '../button/Button';
import './SignUp.scss'
class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = e => {
        console.log(e);
        const {name, value} = e.target;
        this.setState({ [name]: value } )

    }

    handleSubmit = async (e) =>{
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert('Passwords don\'t match');
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password);
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
            createUserProfileDocument(user, {displayName});
        }catch(error){
            console.log(error);
        }
    }

  render(){
    const {displayName, email, password, confirmPassword} = this.state;
    return (
        <div className='sign-up'>
            <span>Sign Up with your email and password</span>
            <h2 className='title'>I do not have an account</h2>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput type='text' name='displayName'value={displayName} onChange={this.handleChange} label='Display Name' required />
                <FormInput type='email' name='email' value={email} onChange={this.handleChange} label='Email' required/>
                <FormInput type='password' name='password'value={password} onChange={this.handleChange} label='Password' required/>
                <FormInput type='password' name='confirmPassword'value={confirmPassword} onChange={this.handleChange} label='Confirm Password' required/>
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
      )
  }
}

export default SignUp;