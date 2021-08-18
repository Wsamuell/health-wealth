import React, { useState } from 'react';
import { ALL_POST } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import Goal from '../Goal';
import './style.css'

function AutoPost() {

    const { data } = useQuery(ALL_POST)

    const userData = data?.allPosts || []

    console.log(...userData)

    const [count, setCount] = useState(0);


    return (
        <div className='activities'>
            <p className='recent-title'>Recent activities around the World</p>
            <div className='post'>
                {userData.map(user => (
                    <div className='single-post'>
                        <div>{user.textInfo}</div>
                            <a onClick={() => setCount(count + 1)}> {count}
                                <img typeof='button' src={require('../../assets/img/heart.png').default} className='heart' />
                            </a>
                    </div>
                ))}

            </div>


        </div>

    )
}

export default AutoPost;