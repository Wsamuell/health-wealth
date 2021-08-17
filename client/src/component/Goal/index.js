import React from 'react';
import { ADD_POINTS } from '../../utils/mutations';
import { REMOVE_GOAL, ADD_POST } from '../../utils/mutations';
import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_ME } from '../../utils/queries';
import context from 'react-bootstrap/esm/AccordionContext';
import './style.css'

function Goal (goal) {
    // query all goals for a user here

    // i included the button that will trigger the function to create a post

    // I wrote hours or servings becuase a goal might be "do yoga" or "eat vegetables". In fact, we might be able
    // to get rid of this field entirely. I'm thinking that the user would probably just want to write something like
    // "eat five servings of veggies" or "work out for one hour". So in that case, activity and day are the only 
    // fields you need.
    const { username: userParam } = useParams();
    const { loading, data } = useQuery(GET_ME);
    const [addPoints, {error}] = useMutation(ADD_POINTS);
    const [removePost, {err}] = useMutation(REMOVE_GOAL);
    const [addPost, {ish}] = useMutation(ADD_POST)
    const user = data?.me || [];

    const handleGoalSubmit = async (event) => {
        event.preventDefault();

        try {
            await addPoints({
                variables: {userId: user._id, pointValue: 10}
            })
            await removePost({
                variables: {goalId: goal.goal._id, userId: user._id}
            })
            await addPost({
                variables: {textInfo: `${user.username} has completed their ${goal.goal.activity}`, userId: user._id}
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
            <button type="submit" className="btn btn-success" onClick={handleGoalSubmit}>Task Complete</button>
            }
        </div>
    )
}

export default Goal;