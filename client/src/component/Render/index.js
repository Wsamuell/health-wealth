import React, { useState } from 'react';
import Nav from '../Nav';
import Profile from '../Profile';
import Home from '../Home';
import Portal from '../Portal'

function Render() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        switch (currentPage) {
            case 'Portal':
                return <Portal />;
            case 'Profile':
                return <Profile />;
            case 'Home':
                return <Home />;
            default:
                return <Portal />;
        }
    }
    if (currentPage === 'Portal') {
        return (
            <div>
                <div>{renderPage(currentPage)}</div>
            </div>
        )
    }

    return (
        <div>
            <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <div>{renderPage(currentPage)}</div>
        </div>
    )


}

export default Render;