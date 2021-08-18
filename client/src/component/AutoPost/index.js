import React, { useState } from 'react';
import { ALL_POST, QUERY_USERS } from '../../utils/queries';
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
    const handleLikeSubmit = async (event) => {
        event.preventDefault();
        // handleInputChange()

        try {

                const { data } = await addPoints({
                    variables: { ...likePoints, pointValue: 10 }
                });
            console.log()


        } catch (err) {
            console.error(err);
        }

    }



    return (
        <div className='activities'>
            <p className='recent-title'>Recent activities around the World</p>
            <div className='post'>
                {userData.map(user => (
                    <div key={user._id} className='single-post'>
                        <div >{user.textInfo}</div>
                        {/* <div name='userId' onChange={handleInputChange}>{user.userId}</div> */}
                        <a onClick={handleLikeSubmit}>
                            <img typeof='button' src={require('../../assets/img/heart.png').default} className='heart' />
                        </a>
                    </div>
                ))}

            </div>


        </div>

    )
}

export default AutoPost;