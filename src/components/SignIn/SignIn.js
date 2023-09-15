import React from 'react'

class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        console.log(e);
        const {name, value} = e.target;
        this.setState({[name]: value })

    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({email:'', password:''})
    }

  render(){
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <input name='email' type='email' value={this.state.email} onChange={this.handleChange} required/>
                <label>Email</label>
                <input name='password' type='password' value={this.state.password} onChange={this.handleChange} required/>
                <label>Password</label>
                <input type='submit' value= 'submit form'/>
            </form>
        </div>
      )
  }
}

export default SignIn;