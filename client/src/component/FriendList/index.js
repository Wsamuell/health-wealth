import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const FriendList = ({ friendCount, username, friends }) => {
  if (!friends || !friends.length) {
    return;
  }

  return (
    <div>
      <h5>
        {username}'s {friendCount} {friendCount === 1 ? 'friend' : 'friends'}
      </h5>
      {friends.map(friend => (
        <button className="btn w-100 display-block mb-2" key={friend._id}>
          <Link to={`/profile/${friend.username}`}>{friend.username}</Link>
        </button>
      ))}
    </div>
  );
};

export default FriendList;