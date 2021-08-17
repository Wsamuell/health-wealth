import React from 'react';
import { ALL_POST } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import Goal from '../Goal';
import './style.css'

function AutoPost({ regimens }) {

    const { data } = useQuery(ALL_POST)

    const userData = data?.users || []
    console.log(userData)
    console.log(regimens)


    return (
        <div>
            <p>Recent activities from your friends</p>
            <div className='each-post'>
                <div>
                    <div>UserName recently completed the following Task</div>
                    <div>goal.activity</div>
                <div>
                    <button>like</button>
                    <button>comment</button>
                </div>
                </div>
            </div>

            <div className='each-post'>
                <div>
                    <div>UserName recently completed the following Task</div>
                    <div>goal.activity</div>
                <div>
                    <button>like</button>
                    <button>comment</button>
                </div>
                </div>
            </div>
   
        </div>

    )
}

export default AutoPost;