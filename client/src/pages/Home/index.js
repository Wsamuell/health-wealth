import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import FriendsList from '../../component/FriendList';
import { FormControl, InputGroup, Button } from 'react-bootstrap'
import './style.css';

function Home() {

    return (
        <div className='home'>
            <InputGroup className="mb-3 w-50 align-middle">
                <FormControl
                    placeholder="Search for other users"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                    Search
                </Button>
            </InputGroup>

        </div>
    )

}

export default Home;