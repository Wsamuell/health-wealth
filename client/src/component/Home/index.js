import React from 'react';
import './style.css'

function Home() {

    return (
        <div className='home'>
            <div className='logo'>
                <h1 className='app-name health'><span className='span-h'>H</span>ealth</h1>
                <h1 className='app-name wealth'>
                    <span className='span-w'>W</span>ealth
                    <span className='span-plus'>+</span>
                </h1>
            </div>
        </div>
    )

}

export default Home;