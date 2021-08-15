import React from 'react';

function Goal () {
    // query all goals for a user here

    // i included the button that will trigger the function to create a post

    // I wrote hours or servings becuase a goal might be "do yoga" or "eat vegetables". In fact, we might be able
    // to get rid of this field entirely. I'm thinking that the user would probably just want to write something like
    // "eat five servings of veggies" or "work out for one hour". So in that case, activity and day are the only 
    // fields you need.
    return (
        <div className="goal-card">
            <h1>Day: {goal.day}</h1>
            <h1>Goal: {goal.activity}</h1>
            <h1>Hours or Servings: {goal.hours}</h1>
            <button type="submit" className="btn btn-success">Task Complete</button>
        </div>
    )
}