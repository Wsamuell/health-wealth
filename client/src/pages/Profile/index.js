import React, { useState } from 'react';
import Regiment from '../../component/Regiment';
import FriendList from '../../component/FriendList'
import { useParams, Redirect } from 'react-router-dom';
import { GET_ME, QUERY_USER } from '../../utils/queries';
import { ADD_GOAL, ADD_FRIEND, REMOVE_FRIEND, CHANGE_ABOUT } from '../../utils/mutations';
import { useQuery, useMutation } from '@apollo/client';
import { Modal } from 'react-bootstrap';
import Auth from '../../utils/auth';
import context from 'react-bootstrap/esm/AccordionContext';
import './style.css';


function Profile(props) {

    const { username: userParam } = useParams();
    const [addFriend] = useMutation(ADD_FRIEND);
    const [removeFriend] = useMutation(REMOVE_FRIEND);
    const [changeAbout] = useMutation(CHANGE_ABOUT)

    const { loading, data } = useQuery(userParam ? QUERY_USER : GET_ME, {
        variables: { username: userParam }
    });

    const [addGoal, { error }] = useMutation(ADD_GOAL)

    const [goalFormData, setGoalFormData] = useState({ day: '', activity: '', hours: '' });
    const user = data?.me || data?.user || [];


    const [aboutMeSubmit, setMeSubmit] = useState({ aboutMe: '' })
    const [showModal2, setShowModal2] = useState(false)
    const handleClose2 = () => setShowModal2(false)
    const handleShow2 = () => setShowModal2(true)

    const [showModal, setShowModal] = useState(false)
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleInputChange2 = (event) => {
        const { name, value } = event.target
        setMeSubmit({ ...aboutMeSubmit, [name]: value });
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setGoalFormData({ ...goalFormData, [name]: value });
    };

    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Redirect to='/profile' />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }
    if (!user?.username) {
        return (
            <h4>
                No User found with this Username
            </h4>
        );
    }

    const handleAboutMeSubmit = async (event) => {
        event.preventDefault();

        try {
            await changeAbout({
                variables: { ...aboutMeSubmit }
            })
        } catch (err) {
            console.error(err)
        }
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addGoal({
                variables: { ...goalFormData, userId: 0 }
            });
        } catch (err) {
            console.error(err)
        }
    }

    const handleFollowClick = async () => {
        try {
            await addFriend({
                variables: { id: user._id }
            });
        } catch (e) {
            console.error(e);
        }
    };
    const handleUnFollowClick = async () => {
        try {
            await removeFriend({
                variables: { id: user._id }
            });
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <div className='profile'>
            <div className="flex-row mb-3 prof-view">
                <h2 className="prof-title">
                    Viewing {userParam ? `${user.username}'s` : 'your'} profile.
                </h2>
                {userParam && (
                    <div className='follow'>
                        <button className='btn btn-primary ml-auto' onClick={handleFollowClick}> Follow {user.username}</button>
                        <button className='btn btn-secondary ml-auto' onClick={handleUnFollowClick}> Unfollow {user.username}</button>
                    </div>
                )}
            </div>
            <div id="user-div" className="">
                <h4>Current Badge</h4>
                <img id="user-icon" src={require(`../../assets/user_icons/${user.icon}`).default} height='150px' width='150px'></img>
                {!userParam && (
                    <p id="point-count">{user.points} Total Points</p>
                )}
            </div>
            <div className="regimen-col">
                <div id="about-me">
                    <h2>Bio</h2>
                    <p className='about-text'>{user.aboutMe}</p>
                    {!userParam &&
                        <button type="button" className='form-control btn btn-outline-info open-modal' onClick={handleShow2}>Edit</button>
                    }
                    <Modal show={showModal2} onHide={() => setShowModal2(false)}>
                        <form onSubmit={handleAboutMeSubmit} className="aboutMe-modal">
                            <p>About Me</p>
                            <textarea className='about-input' placeholder="Tell Us About Yourself" name="aboutMe" onChange={handleInputChange2} value={aboutMeSubmit.about}></textarea>
                            <button className='about-submit' type="submit" onClick={handleClose2}>Submit</button>
                        </form>
                    </Modal>
                </div>

                <div className="">

                    <div id="regiment-div" className="">
                        <Regiment regimens={user.regimens}></Regiment>
                        {!userParam &&
                            <button type="button" className="form-control btn btn-primary open-modal" onClick={handleShow}>New Goal</button>
                        }
                        <Modal show={showModal} onHide={() => setShowModal(false)}>
                            <form className="goal-modal" onSubmit={handleFormSubmit}>

                                <div className="">
                                    <select
                                        type="day"
                                        className="dropdown"
                                        placeholder='Day'
                                        name='day'
                                        onChange={handleInputChange}
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
                                <br />
                                <div className="mb-3">
                                    <input
                                        type="activity"
                                        className="form-control"
                                        type='text'
                                        placeholder='Goal'
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
                                        placeholder='Hours or Servings'
                                        name='hours'
                                        onChange={handleInputChange}
                                        value={goalFormData.password}
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="form-control btn btn-success"
                                    onClick={handleClose}
                                    disabled={!(goalFormData.day && goalFormData.activity && goalFormData.hours)}
                                >Add Goal</button>
                            </form>
                        </Modal>
                    </div>

                </div>
            </div>

            <div id="friends=div">
                <FriendList friends={user.friends}></FriendList>
            </div>

        </div>
    )
}

export default Profile;