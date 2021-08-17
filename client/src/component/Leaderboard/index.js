import React from 'react';
import '../Leaderboard/style.css';
import { QUERY_USERS } from '../../utils/queries';
import { Table, thead, tr, tbody } from 'react-bootstrap'
import { useQuery } from '@apollo/client'



function Leaderboard() {

    const { data } = useQuery(QUERY_USERS)

    const userData = data?.users || []

    const sortedByPoints = [...userData].sort((a, b) => b.points - a.points).slice(0,25)


    return (
        <div>
            <h1>Leaderboard</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User</th>
                        <th>All Time Points</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedByPoints.map((user, index) => (
                        <tr key={user.username}>
                            <td> {index + 1} </td>
                            <td> {user.username} </td>
                            <td> {user.points} </td>

                        </tr>
                    )
                    )}
                </tbody>
            </Table>
        </div>
    )
};

export default Leaderboard;