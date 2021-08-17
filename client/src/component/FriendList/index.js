import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

function FriendList({ friendCount, username, friends }) {
  if (!friends || !friends.length) {
    return (
      <div className='friends-list'>
        <p>
          {username}'s {friendCount} {friendCount === 1 ? 'friend' : 'friends'}
        </p>
        <div className='no-friends'>No Friends Yet</div>
      </div>
    );
  }

  return (
    <div className='friends-list'>
      <p className='friends-title'>
        {username}'s {friendCount} {friendCount === 1 ? 'friend' : 'friends'}
      </p>
      {friends.map(friend => (
        <button className="btn btn-light btn-lg btn-block friends" key={friend._id}>
          <Link className='friends-link' to={`/profile/${friend.username}`}>{friend.username}</Link>
        </button>
      ))}
    </div>
  );
};

export default FriendList;