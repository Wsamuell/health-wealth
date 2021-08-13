import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER, } from '../../utils/mutations'
import Auth from '../../utils/auth';
import SignIn from '../Sign-in';
import { Modal } from 'react-bootstrap';
import './style.css'


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

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <div>
                <form className='sign-up-form' onSubmit={handleFormSubmit}>
                    <p>Sign Me Up!</p>

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
                    <button 
                    type="submit" 
                    className="form-control btn btn-success"
                    disabled={!(userFormData.email && userFormData.password && userFormData.username)}

                    >Sign Up</button>
                    <br />
                    <br />
                    <button type="button" className="form-control btn btn-primary open-modal" onClick={handleShow}>I Already have an account </button>


                </form>
                {error && <div> Something Went Wrong </div>}
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)} >
                <SignIn handleModalClose={() => setShowModal(false)} />
            </Modal>
        </>
    )
}

export default SignUp;