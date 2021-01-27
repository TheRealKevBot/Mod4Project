import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom';

import Home from './Pages/Home'
import Account from './Pages/Account'
import FurryFriendsFinder from './Pages/FurryFriendsFinder'
import About from './Pages/About'

export default class Main extends Component {

    state={
        animals: [],
        favorites: [],
        user: []
    }

    // setAnimalsState
    // setFavoritesState
    // setUserState

    render(){
        return (
            <main className="main">
                {/* HOME */}<Route exact path='/' render={(routerProps) => <Home {...routerProps} />} />
                {/* ABOUT */}<Route path='/about' render={(routerProps) => <About {...routerProps} />} />
                {/* FFF */}<Route path='/furryfriendsfinder' render={(routerProps) => <FurryFriendsFinder {...routerProps} />} />
                {/* ACCOUNT */}<Route path='/account' render={(routerProps) => <Account {...routerProps} />} />

                <Redirect to='/' />

            </main>
        )
    }
}
