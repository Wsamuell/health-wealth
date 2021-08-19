import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME, QUERY_USERS } from '../../utils/queries';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { FormControl, Button, Form } from 'react-bootstrap'
import Leaderboard from '../../component/Leaderboard';
import AutoPost from '../../component/AutoPost';
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
            setSearchUser(filterUsers);
            setSearchUser('');
            userLink = <div className="d-grid gap-2 col-6 mx-auto mb-4">
                <p>User Found</p>
                <Link className='searched-content btn btn-primary' to={`/profile/${filterUsers[0].username}`}>{filterUsers[0].username}</Link>
            </div>

        } catch (err) {
            userLink = <div className='no-searched-content'>No User found</div>
        }
    }


    return (
        <div className='home-sec'>
            <div>
                <Form className="search-form" onSubmit={handleFormSubmit}>
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
            <div className='home-p-l'>
                <AutoPost />
                <Leaderboard />
            </div>

        </div>
    )

}

export default Home;