import React,{ useState } from 'react';
import SignIn from '../../forms/Sign-in'

import './style.css'

function Portal() {

    return (
        <div className='portal'>
            <img src={require('../../assets/img/hero.jpg').default} className='hero-img' />
            <div className='main'>
                <div >
                    <div className='logo'>
                        <h1 className='app-name health'><span className='span-h'>H</span>ealth</h1>
                        <h1 className='app-name wealth'>
                            <span className='span-w'>W</span>ealth
                            <span className='span-plus'>+</span>
                        </h1>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className='info-text'>
                        <h3>A Community Spreading healthy habits </h3>
                        <p>Together</p>
                    </div>
                </div>
                <div className='welcome-forms'>
                    <SignIn />

                </div>
            </div>


        </div>



    )
}

export default Portal;