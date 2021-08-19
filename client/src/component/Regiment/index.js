import React from 'react';
import Goal from '../Goal';
import './style.css'

const Regiment = ({ regimens }) => {
    console.log(regimens)
    if (!regimens) {
        return <div>No Reg</div>
    }
    console.log(regimens)

    return (
        <div className='day-regimen'>
            <p className='current-title'> Current Goals </p>
            <div className='day-to-day'>
                <div className="day" id="sunday">
                    <h3>Sunday</h3>
                    {regimens.map(goal => {
                        if (goal.day === "Sunday") {
                            return <Goal key="1" goal={goal}></Goal>
                        }
                    })}
                </div>
                <div className="day" id="monday">
                    <h3>Monday</h3>
                    {regimens.map(goal => {
                        if (goal.day === "Monday") {
                            return <Goal key="2" goal={goal}></Goal>
                        }
                    })}
                </div>
                <div className="day" id="tuesday">
                    <h3>Tuesday</h3>
                    {regimens.map(goal => {
                        if (goal.day === "Tuesday") {
                            return <Goal key="3" goal={goal}></Goal>
                        }
                    })}
                </div>

                <div className="day" id="wednesday">
                    <h3>Wednesday</h3>
                    {regimens.map(goal => {
                        if (goal.day === "Wednesday") {
                            return <Goal key="4" goal={goal}></Goal>
                        }
                    })}
                </div>
                <div className="day" id="thursday">
                    <h3>Thursday</h3>
                    {regimens.map(goal => {
                        if (goal.day === "Thursday") {
                            return <Goal key="5" goal={goal}></Goal>
                        }
                    })}
                </div>
                <div className="day" id="friday">
                    <h3>Friday</h3>
                    {regimens.map(goal => {
                        if (goal.day === "Friday") {
                            return <Goal key="6" goal={goal}></Goal>
                        }
                    })}
                </div>
                <div className="day" id="saturday">
                    <h3>Saturday</h3>
                    {regimens.map(goal => {
                        if (goal.day === "Saturday") {
                            return <Goal key="7" goal={goal}></Goal>
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Regiment;