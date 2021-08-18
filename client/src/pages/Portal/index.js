import React, { useState } from 'react';
import SignIn from '../../forms/Sign-in'

import './style.css'

function Portal() {

    return (
        <div className='portal'>
            <div></div>
            <img src={require('../../assets/img/hero.jpg').default} className='hero-img' />
            <div className='main'>
                <div className=''>
                    <div className='logo'>
                        <h1 className='app-name health'><span className='span-h'>H</span>ealth</h1>
                        <h1 className='app-name wealth'>
                            <span className='span-w'>W</span>ealth
                            <span className='span-plus'>+</span>
                        </h1>
                    </div>
                    <div className='info-text'>
                        <h3>A Community Spreading healthy habits </h3>
                        <p>Together</p>
                    </div>
                </div>
                <div className='welcome-forms' id='inside-sign-in'>
                    <SignIn />
                </div>
            </div>
            <div className='welcome-forms' id='outside-sign-in'>
                <SignIn />
            </div>


        </div>



    )
}

export default Portal;