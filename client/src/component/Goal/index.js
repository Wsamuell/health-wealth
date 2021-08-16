import React from 'react';
import { ADD_POINTS } from '../../utils/mutations';
import { REMOVE_GOAL } from '../../utils/mutations';
import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_ME, RE } from '../../utils/queries';
import context from 'react-bootstrap/esm/AccordionContext';

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
    const user = data?.me || [];

    const handleGoalSubmit = async (event) => {
        event.preventDefault();

        try {
            await addPoints({
                variables: {userId: user._id, pointValue: 10}
            })
        } catch (err) {
            console.error(err)
        }
    } 

    return (
        <div className="goal-card">
            <h1>Day: {goal.goal.day}</h1>
            <h1>Goal: {goal.goal.activity}</h1>
            <h1>Hours or Servings: {goal.goal.hours}</h1>
            {!userParam && 
            <button type="submit" className="btn btn-success" onClick={handleGoalSubmit}>Task Complete</button>
            }
        </div>
    )
}

export default Goal;