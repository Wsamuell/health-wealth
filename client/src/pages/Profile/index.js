import React, { useState } from 'react';
import Regiment from '../../component/Regiment';
import FriendList from '../../component/FriendList'
import Recipes from '../../component/Recipes';
import { GET_ME } from '../../utils/queries';
import { ADD_GOAL } from '../../utils/mutations';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { Modal } from 'react-bootstrap';
import context from 'react-bootstrap/esm/AccordionContext';

function Profile() {
    const { loading, data } = useQuery(GET_ME);
    const [addGoal, {error}] = useMutation(ADD_GOAL)
    const [goalFormData, setGoalFormData] = useState({ day: '', activity: '', hours: '' });
    const user = data?.me || [];


    const [showModal, setShowModal] = useState(false)
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setGoalFormData({ ...goalFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addGoal({
                variables: {...goalFormData, userId: 0}
            });
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <div id="regiment-div">
                <Regiment regimens={user.regimens}></Regiment>
                <button type="button" className="form-control btn btn-primary open-modal" onClick={handleShow}>New Goal</button>
                <Modal show={showModal} onHide={() => setShowModal(false)} >
                    <div>
                        <form className="" onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                        <select
                            type="day"
                            className=""
                            placeholder='Day'
                            name='day'
                            onChange={handleInputChange}
                            value={goalFormData.username}
                            required
                        >
                            <option value="Sunday">Sunday</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <input
                            type="activity"
                            className="form-control"
                            type='text'
                            placeholder='Activity'
                            name='activity'
                            onChange={handleInputChange}
                            value={goalFormData.email}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="hours"
                            className="form-control"
                            type='text'
                            placeholder='Hours'
                            name='hours'
                            onChange={handleInputChange}
                            value={goalFormData.password}
                            required
                        />
                    </div>
                    <button 
                    type="submit" 
                    className="form-control btn btn-success"
                    disabled={!(goalFormData.day && goalFormData.activity && goalFormData.hours)}
                    >Add Goal</button>
                        </form>
                    </div>
                </Modal>
            </div>
            <div id="user-div">
                <img id="user-icon"></img>
                <h1>{user.username}</h1>
                <button>Change Icon</button>
                <p id="point-count">{user.points}</p>
            </div>
            <div id="friends=div">
                <FriendList friends={user.friends}></FriendList>
            </div>
            <div id="about-me">
                <h1>About Me</h1>
                <p>{user.aboutMe}</p>
                <button id="edit-button">Edit</button>
            </div>
        </div>
    )
}

export default Profile;