import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about-us">About Us</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
