import React from 'react';
import '../Leaderboard/style.css';
// import axios 

// need to sort the data 

// state = {
//     top25AllTime: []
// }

// function Leaderboard() {
//     const {top25AllTime} = this.state;

//     return (
//         <div>
//             <table>
//             <h1>Leaderboard</h1>
//             <thead>
//                 <tr>
//                     <th>#</th>
//                     <th>User</th>
//                     <th>All Time Points</th>
//                 </tr>
//             </thead>
//             <tbody>
//             {top25AllTime.map((row, index)=>(
//                 <tr key={row.username}>
//                     <td> {index + 1} </td>
//                     {/* we can pass in an image component to pull up the user's avatar if we want */}
//                     <td> {row.username} </td>
//                     <td> {row.top25AllTime} </td>
//                     <td> {index + 1} </td>

//                 </tr>
//             )
//             )}
//             </tbody>
//             </table>
//         </div>
//     )
// }

// export default Leaderboard;