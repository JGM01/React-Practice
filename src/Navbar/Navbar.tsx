import React, { ReactElement, ReactNode } from 'react';
import './Navbar.css';

function Navbar(): JSX.Element {
    return (
        <nav className='navbar'>
            <ul className='nav-items'>
                <li>Store</li>
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Watch</li>
                <li>Airpods</li>
                <li>TV & Home</li>
                <li>Entertainment</li>
                <li>Accessories</li>
                <li>Support</li>
            </ul>
        </nav>
    );
}

export default Navbar;