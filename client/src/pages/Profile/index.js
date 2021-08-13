import React from 'react';
import Regiment from '../../component/Regiment';
import Recipes from '../../component/Recipes';

function Profile () {
    return (
        <div className="container">
            <div className="row">
                <div className="col-8 regiment">
                    <Regiment />
                </div>
                <div className="col-4 user-icon">
                    {/* This would pull from the database to see which icon the user has, then display it from the assets folder. */}
                </div>
            </div>
            <div className="row">
                <div className="col-4 about-me">
                    {/* Make query to get about me text, then display it here */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="col-4 recipes">
                    <Recipes />
                </div>
            </div>
        </div>
    )
}

export default Profile;