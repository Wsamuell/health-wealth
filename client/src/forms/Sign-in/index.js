import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER, LOGIN_USER } from '../../utils/mutations'
import Auth from '../../utils/auth';
import './style.css'

function SignIn() {
    const [loginUser] = useMutation(LOGIN_USER);
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const { data } = await loginUser({ 
              variables: { ...userFormData }
            });
            console.log(data)
      
            Auth.login(data.login.token);
      
          } catch (err) {
            console.error(err);
          }
      
          setUserFormData({
            username: '',
            email: '',
            password: '',
          });
    
    };

    return (
        <div className='sign-in-modal'>
            <form className='sign-in-form' onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <input
                     type="email"
                      className="form-control"
                      placeholder='Your email'
                      name='email'
                      onChange={handleInputChange}
                      value={userFormData.email}
                      required   
                     />
                </div>
                <div className="mb-3">
                    <input 
                    type="password" 
                    className="form-control" 
                    placeholder="********" 
                    name='password'
                    onChange={handleInputChange}
                    value={userFormData.password}
        
                    />
                </div>
                <div className='mb-3'>
                    <button 
                    type="submit" 
                    className=" form-control btn btn-primary"
                    disabled={!(userFormData.email && userFormData.password)}
                    >Log In</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;