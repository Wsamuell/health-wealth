import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME, QUERY_USERS } from '../../utils/queries';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { FormControl, Button, Form } from 'react-bootstrap'
import Leaderboard from '../../component/Leaderboard';
import './style.css';


let filterUsers = []
let userLink;

const Home = props => {
    const [searchUser, setSearchUser] = useState('')
    const { loading, data } = useQuery(QUERY_USERS);
    const { data: myData } = useQuery(GET_ME);
    const allUsers = data?.users || []



    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (loading) {
            return <div>Loading...</div>;
        }
        if (!searchUser) {
            return false;
        }
        try {
            filterUsers = allUsers.filter((users) => {
                if (users.username === `${searchUser}`) {
                    return users
                }
            })
            // console.log(filterUsers[0])
            setSearchUser(filterUsers);
            setSearchUser('');
            userLink = <Link to={`/profile/${filterUsers[0].username}`}>{filterUsers[0].username}</Link>

        } catch (err) {
            userLink = <div>No User found</div>
            // console.log('no user found');
        }
    }




    return (
        <div className=''>
            <p>Home</p>
            <div>
                <Form className="mb-3 w-50 align-middle" onSubmit={handleFormSubmit}>
                    <FormControl
                        value={searchUser}
                        name='userSearch'
                        type="text"
                        onChange={(e) => setSearchUser(e.target.value)}
                        placeholder="Search By Username..."
                    />
                    <Button type='submit' variant="outline-secondary" id="button-addon2">
                        Search
                    </Button>
                </Form>
                {userLink}
            </div>
            <Leaderboard />
        </div>
    )

}

export default Home;