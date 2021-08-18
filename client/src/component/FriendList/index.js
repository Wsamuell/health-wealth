import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { GET_ME, QUERY_USER } from '../../utils/queries';
import { useQuery } from '@apollo/client';

import './style.css'

function FriendList({ friendCount, username, friends }) {
  const { username: userParam } = useParams();
  const { data } = useQuery(userParam ? QUERY_USER : GET_ME, {
    variables: { username: userParam }
  });
  const user = data?.me || data?.user || [];
  if (!friends || !friends.length) {
    return (
      <div className='friends-list'>
        <p>
          {user.username}'s {friendCount} {friendCount === 1 ? 'friend' : 'friends'}
        </p>
        <div className='no-friends'>No Friends Yet</div>
      </div>
    );
  }
  return (
    <div className='friends-list'>
      <p className='friends-title'>
        {user.username}'s {friendCount} {friendCount === 1 ? 'friend' : 'friends'}
      </p>
      {friends.map(friend => (
        <button className="btn btn-light btn-lg friends" key={friend._id}>
          <Link className='friends-link' to={`/profile/${friend.username}`}>{friend.username}</Link>
        </button>
      ))}
    </div>
  );
};

export default FriendList;