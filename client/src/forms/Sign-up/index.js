import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations'
import Auth from '../utils/auth';
import './style.css'

function SignUp() {

    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);
    
  
    return (
        <form className='sign-up-form'>
        <p>Sign Me Up!</p>
        <div className="mb-3">
            <input type="first-name" className="form-control" placeholder="First Name" />
        </div>
        <div className="mb-3">
            <input type="last-name" className="form-control" placeholder="Last Name" />
        </div>
        <div className="mb-3">
            <input type="Username" className="form-control" placeholder="Username" />
        </div>
        <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-success btn-lg">I'm In!</button>
    </form>
    )
}

export default SignUp;