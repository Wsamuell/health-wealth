import React from 'react';
import { ADD_POINTS } from '../../utils/mutations';
import { REMOVE_GOAL, ADD_POST } from '../../utils/mutations';
import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_ME } from '../../utils/queries';
import context from 'react-bootstrap/esm/AccordionContext';
import './style.css'

function Goal(goal) {
    const { username: userParam } = useParams();
    const { loading, data } = useQuery(GET_ME);
    const [addPoints, { error }] = useMutation(ADD_POINTS);
    const [removePost, { err }] = useMutation(REMOVE_GOAL);
    const [addPost, { ish }] = useMutation(ADD_POST)
    const user = data?.me || [];

    const handleGoalDelete = async (event) => {
        event.preventDefault();

        try {
            await removePost({
                variables: { goalId: goal.goal._id, userId: user._id }
            })
        } catch (err) {
            console.error(err)
        }
    }

    const handleGoalSubmit = async (event) => {
        event.preventDefault();

        try {
            await addPoints({
                variables: { userId: user._id, pointValue: 10 }
            })
            await removePost({
                variables: { goalId: goal.goal._id, userId: user._id }
            })
            await addPost({
                variables: { textInfo: `${user.username} has completed their ${goal.goal.activity}`, userId: user._id }
            })
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="goal-card">
            <h5>Goal</h5>
            <h6>{goal.goal.activity}</h6>
            <br />
            <br />
            <h5>Hours or Servings</h5>
            <h6>{goal.goal.hours}</h6>
            {!userParam &&
                <div className='goal-buttons'>
                    <button type="submit" className="btn btn-success" onClick={handleGoalSubmit}>Task Complete</button>
                    <br/>
                    <button onClick={handleGoalDelete} className="btn btn-danger">Delete</button>
                </div>
            }
        </div>
    )
}

export default Goal;