import React from 'react';
import './style.css'

function SignIn() {


    return (
        <div className='sign-in-modal'>
            <form className='sign-in-form'>
                <span class="close">&times;</span>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className='mb-3'>
                    <button type="submit" className=" form-control btn btn-primary">Log In</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;