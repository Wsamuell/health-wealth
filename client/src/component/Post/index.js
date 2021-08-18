import React from 'react'
import { GET_ME } from '../../utils/queries';
import { ADD_POINTS, REMOVE_POINTS } from '../../utils/mutations'
import { useMutation, useQuery } from '@apollo/client';


function Post({ post }) {

    const { data, loading } = useQuery(GET_ME);
    const [addPoints, { err }] = useMutation(ADD_POINTS);

    const contextUser = data?.me || {}

    const handleLikeSubmit = async (event) => {
        event.preventDefault();

        try {
            await addPoints({
                variables: { userId: post.userId, pointValue: 10 }
            })
            await addPoints({
                variables: { userId: contextUser._id, pointValue: -10 }
            })
        } catch (err) {
            console.error(err);
        }

    }

    return (
        <div key={post._id} className='single-post'>
            <div >{post.textInfo}</div>
            {/* <div name='userId' onChange={handleInputChange}>{user.userId}</div> */}
            <a onClick={handleLikeSubmit}>
                <img typeof='button' src={require('../../assets/img/heart.png').default} className='heart' />
            </a>
        </div>
    )
}

export default Post