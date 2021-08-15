import React, { useState} from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_USERS } from '../../utils/queries';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import FriendsList from '../../component/FriendList';
import { FormControl, InputGroup, Button } from 'react-bootstrap'
import Leaderboard from '../../component/Leaderboard';
import './style.css';

function Home() {
    const [searchUser, setSearchUser] = useState()
    const { loading, data, error } = useQuery(QUERY_USERS);
    const { data: myData } = useQuery(QUERY_ME);
    const allUsers = data?.users;
    console.log(allUsers)

const filterUser = allUsers.filter(user => {
    if (user.username === 'test1') {
        return user
    }
})
console.log(filterUser)

    return (
        <div className='home'>
            <InputGroup className="mb-3 w-50 align-middle">
                <FormControl
                    placeholder="Search By Username..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                    Search
                </Button>
            </InputGroup>

            {/* <Leaderboard /> */}
        </div>
    )
}

export default Home;