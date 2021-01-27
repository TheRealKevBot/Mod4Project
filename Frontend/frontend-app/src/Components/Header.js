import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <h1 className="title">New BestFriends</h1>
            <ul className="nav-bar">
                <li><Link to='/'>
                    Home
                </Link></li>
                <li><Link to='/about'>
                    Who We Are
                </Link></li>
                <li><Link to='/furryfriendsfinder'>
                    FurryFriendsFinder
                </Link></li>
                <li><Link to='/account'>
                    Account
                </Link></li>
            </ul>
        </header>
    )
}
