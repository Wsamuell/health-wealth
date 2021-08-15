import React from 'react';


function Regiment({ regimens }) {
    if(!regimens) {
        return <div></div>
    }

    return (
        <div>
            <div className="day" id="sunday">
                <h2>Sunday</h2>
                {regimens.forEach(goal => {
                    if(goal.day === "Sunday") {
                        <div>{/*goal component*/}</div>
                    } 
                })}
            </div>
            <div className="day" id="monday">
                <h2>Monday</h2>
                {regimens.forEach(goal => {
                    if(goal.day === "Monday") {
                        <div>{/*goal component*/}</div>
                    } 
                })}
            </div>
            <div className="day" id="tuesday">
                <h2>Tuesday</h2>
                {regimens.forEach(goal => {
                    if(goal.day === "Tuesday") {
                        <div>{/*goal component*/}</div>
                    } 
                })}
            </div>
            <div className="day" id="wednesday">
                <h2>Wednesday</h2>
                {regimens.forEach(goal => {
                    if(goal.day === "Wednesday") {
                        <div>{/*goal component*/}</div>
                    } 
                })}
            </div>
            <div className="day" id="thursday">
                <h2>Thursday</h2>
                {regimens.forEach(goal => {
                    if(goal.day === "Thursday") {
                        <div>{/*goal component*/}</div>
                    } 
                })}
            </div>
            <div className="day" id="friday">
                <h2>Friday</h2>
                {regimens.forEach(goal => {
                    if(goal.day === "Friday") {
                        <div>{/*goal component*/}</div>
                    } 
                })}
            </div>
            <div className="day" id="saturday">
                <h2>Saturday</h2>
                {regimens.forEach(goal => {
                    if(goal.day === "Saturday") {
                        <div>{/*goal component*/}</div>
                    } 
                })}
            </div>
        </div>
    )
}

export default Regiment;