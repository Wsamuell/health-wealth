import React from 'react';
import { ALL_POST } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import Goal from '../Goal';

function AutoPost({regimens}) {

    const { data } = useQuery(ALL_POST)

    const userData = data?.users || []
    console.log(userData)
    console.log(regimens)


    return (
        <div>
            <p>Recent activities from your friends</p>
            <div>
                <div>UserName recently completed the following Task</div>
                <div>goal.activity</div>

            </div>
        </div>
    )
}

export default AutoPost;