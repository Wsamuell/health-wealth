import React from 'react';
import './style.css'

function SignIn() {


    return (
        <form className='sign-in-form'>
        <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Log In</button>
        <div className='create-btn'>
            <br />
            <button type="submit" className="btn btn-success">Create New Account </button>
        </div>
    </form>
    )
}

export default SignIn;