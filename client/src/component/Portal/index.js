import React from 'react';
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
                    <form className='sign-in-form'>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Email" />
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" placeholder="Password" />
                        </div>
                        <button type="submit" class="btn btn-primary">Log In</button>
                        <div className='create-btn'>
                            <br />
                            <button type="submit" class="btn btn-success">Create New Account </button>
                        </div>
                    </form>
                    <form className='sign-up-form'>
                        <p>Sign Me Up!</p>
                        <div class="mb-3">
                            <input type="first-name" class="form-control" placeholder="First Name" />
                        </div>
                        <div class="mb-3">
                            <input type="last-name" class="form-control" placeholder="Last Name" />
                        </div>
                        <div class="mb-3">
                            <input type="Username" class="form-control" placeholder="Username" />
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="Email" />
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" placeholder="Password" />
                        </div>
                        <button type="submit" class="btn btn-">Submit</button>
                    </form>
                </div>
            </div>


        </div>



    )
}

export default Portal;