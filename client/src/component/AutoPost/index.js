import React, { useState } from 'react';
import Post from '../Post'
import { ALL_POST, QUERY_USERS, GET_ME } from '../../utils/queries';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_POINTS } from '../../utils/mutations';
import Goal from '../Goal';
import './style.css'


function AutoPost() {
    const { data } = useQuery(ALL_POST)
    const [likePoints, setLikePoints] = useState({ userId:'' });

    const [addPoints] = useMutation(ADD_POINTS);
    const userData = data?.allPosts || []

    // console.log(...userData)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLikePoints({ ...likePoints, [name]: value });
    };


    console.log()
   
    return (
        <div className='activities'>
            <p className='recent-title'>Recent activities around the World</p>
            <div className='post'>
                {userData.map(user => (
                    <Post post={user}></Post>
                ))}

            </div>


        </div>

    )
}

export default AutoPost;