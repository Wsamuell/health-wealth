import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations'
import Auth from '../../utils/auth';
import './style.css'

// const openModalBtn = document.getElementsByClassName('open-modal')
// const modal = document.getElementsByClassName('sign-in-modal')
// const closeModal = document.getElementsByClassName('close')[0]


function SignUp() {

    const [addUser, { error }] = useMutation(ADD_USER);
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addUser({
                variables: { ...userFormData }
            });
            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }

        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
    }
    

    // openModalBtn.onclick = function() {
    //     modal.style.display = 'block'
    // }
    // closeModal.onclick = function () {
    //     modal.style.display = 'block'
    // }
    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //       }
    // }

    return (
        <div>
            <form className='sign-up-form' onSubmit={handleFormSubmit}>
                <p>Sign Me Up!</p>
                {/* <div className="mb-3">
            <input type="first-name" className="form-control" placeholder="First Name" />
        </div>
        <div className="mb-3">
            <input type="last-name" className="form-control" placeholder="Last Name" />
        </div> */}
                <div className="mb-3">
                    <input
                        type="Username"
                        className="form-control"
                        type='text'
                        placeholder='Username'
                        name='username'
                        onChange={handleInputChange}
                        value={userFormData.username}
                        required
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control"
                        type='email'
                        placeholder='Email Address'
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
                        type='password'
                        placeholder='*********'
                        name='password'
                        onChange={handleInputChange}
                        value={userFormData.password}
                        required
                    />
                </div>
                <button type="submit" className="form-control btn btn-success">I'm In!</button>
                <br />
                <br />
                <button type="button" className="form-control btn btn-primary open-modal">I Already have an account </button>
                

            </form>
            {error && <div> Something Went Wrong </div>}
        </div>

    )
}

export default SignUp;