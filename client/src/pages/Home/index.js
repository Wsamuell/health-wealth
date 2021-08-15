import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME, QUERY_USERS } from '../../utils/queries';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { FormControl, Button, Form } from 'react-bootstrap'
// import Leaderboard from '../../component/Leaderboard';
import './style.css';



const Home = props => {
    const [searchUser, setSearchUser] = useState('')

    const { loading, data, error } = useQuery(QUERY_USERS);
    const { data: myData } = useQuery(GET_ME);
    const allUsers = data?.users || []




    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchUser) {
            return false;
        }
        try {
            const filterUsers = allUsers.filter((users) => {
                if (users.username === `${searchUser}`) {
                    return users
                }


            })
            console.log(filterUsers[0].username)

            setSearchUser(filterUsers);
            setSearchUser('');
        } catch (err) {
            console.log(err)
            // console.log('no user found');
        }

    }


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
            {/* <Link>{[filterUsers[0]].username}</Link> */}
            {/* <Leaderboard /> */}
        </div>
    )

}

export default Home;