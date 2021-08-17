import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import '../Nav/style.css';

function Nav() {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };
    const refreshPage = () => {
        window.location.reload(false)
    }

    return (
        <header className='nav-bar'>
            <Link className='mini-logo' onClick={refreshPage}>
                <h1 className='mini-app-name mini-health'><span className='mini-span-h'>H</span>ealth</h1>
                <h1 className='mini-app-name mini-wealth'>
                    <span className='mini-span-w'>W</span>ealth
                    <span className='mini-span-plus'>+</span>
                </h1>

            </Link>

            <nav>
                {Auth.loggedIn() ? (
                    <>
                        <Link to="/home" className='home'> Home </Link>
                        <Link to="/profile" className='my-profile'> My Profile </Link>

                        <Link href="/" className='logout' onClick={logout}> Logout </Link>
                        <Link to="/shop" className='btn btn-info btn-lg'> Shop </Link>
                    </>
                ) : (
                    <>
                        <Link to="/login" className='login-spc'>Login</Link>
                        <Link to="/signup" className='signup'>Signup</Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Nav;