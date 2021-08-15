import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_USERS } from '../../utils/queries';
// import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { FormControl, InputGroup, Button, Jumbotron, Container, Form, Col } from 'react-bootstrap'
// import Leaderboard from '../../component/Leaderboard';
import './style.css';

function Home() {
    const [searchUser, setSearchUser] = useState('')
    const { loading, data, error } = useQuery(QUERY_USERS);
    const { data: myData } = useQuery(QUERY_ME);
    const allUsers = data?.users;
    const loggedIn = Auth.loggedIn();

    console.log(allUsers)

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchUser) {
            return false;
        }
        try {
            const response = await allUsers(searchUser);
            if (!response.ok) {
                throw new Error('Something went wrong, please try again');
            }
            const { usersSearched } = await response.json();
            const searchResult = usersSearched.map((user) => ({
                username: [0].user.username
            }))
            console.log(usersSearched)
            setSearchUser(searchResult);
            setSearchUser('');
        } catch (err) {
            console.log(err);
        }
    }

    // const filterUsers = allUsers.filter((users) => {
    //     if (users.username === 'test1') {
    //         return users
    //     }
    //      else if (!allUsers.filter){
    //         return <div>No Users Found</div>
    //     }

    // })
    // console.log(filterUsers)

    return (
        <div className=''>

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

            {/* <Leaderboard /> */}
        </div>
    )
}

export default Home;