import React from 'react';
import '../Nav/style.css';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

function Nav() {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <header>
            <div className="container flex-row justify-space-between-lg justify-center align-center">
                <Link to="/">
                    <img src={require('../../assets/img/banner-logo.jpg').default} alt="Health Wealth"/>
                </Link>

                <nav className="text-center">
                    {Auth.loggedIn() ? (
                        <>
                            <Link to="/profile"> My Profile </Link>
                            <a href="/" onClick={logout}>
                                Logout
                            </a>
                        </>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Nav;