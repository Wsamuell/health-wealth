import React from 'react';
import Goal from '../Goal';
import './style.css'



const Regiment = ({regimens}) => {
    console.log(regimens)
    if(!regimens) {
        return <div>No Reg</div>
    }
     console.log(regimens)
     return (
        <div className='day-regimen'>
           {/* <p> My Tasks </p> */}
            <div className="day" id="sunday">
                <h2>Sunday</h2>
                {regimens.map(goal => {
                    if(goal.day === "Sunday") {
                       return <Goal key="1" goal={goal}></Goal>
                    } 
                })}
            </div>
            <div className="day" id="monday">
                <h2>Monday</h2>
                {regimens.map(goal => {
                    if(goal.day === "Monday") {
                        return <Goal key="2" goal={goal}></Goal>
                    } 
                })}
            </div>
            <div className="day" id="tuesday">
                <h2>Tuesday</h2>
                {regimens.map(goal => {
                    if(goal.day === "Tuesday") {
                       return <Goal key="3" goal={goal}></Goal>
                    } 
                })}
            </div>
            <div className="day" id="wednesday">
                <h2>Wednesday</h2>
                {regimens.map(goal => {
                    if(goal.day === "Wednesday") {
                        return <Goal key="4" goal={goal}></Goal>
                    } 
                })}
            </div>
            <div className="day" id="thursday">
                <h2>Thursday</h2>
                {regimens.map(goal => {
                    if(goal.day === "Thursday") {
                       return <Goal key="5" goal={goal}></Goal>
                    } 
                })}
            </div>
            <div className="day" id="friday">
                <h2>Friday</h2>
                {regimens.map(goal => {
                    if(goal.day === "Friday") {
                       return <Goal key="6" goal={goal}></Goal>
                    } 
                })}
            </div>
            <div className="day" id="saturday">
                <h2>Saturday</h2>
                {regimens.map(goal => {
                    if(goal.day === "Saturday") {
                       return <Goal key="7" goal={goal}></Goal>
                    } 
                })}
            </div>
        </div>
    )
}

export default Regiment;