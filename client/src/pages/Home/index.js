import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Leaderboard from '../../component/Leaderboard';

function Home() {

    return (
        <div className='home'>
            <Leaderboard></Leaderboard>
        </div>
    )
}

export default Home;