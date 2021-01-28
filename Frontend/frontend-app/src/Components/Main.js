import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home'
import Account from './Pages/Account'
import FurryFriendsFinder from './Pages/FurryFriendsFinder'
import About from './Pages/About' 

import '../App.css'
export default class Main extends Component {

    state = {
        animals: [],
        favorites: [],
        users: []
    }
    
    componentDidMount(){
        fetch("http://localhost:3000/animals")
            .then(response => response.json())
            .then(results => this.setState({ animals: results }))
    }
    
    // componentDidMount(){
    //     fetch("http://localhost:3000/favorites")
    //         .then(response => response.json())
    //         .then(results => this.setState({ animals: results }))
    // }
    
    // componentDidMount(){
    //     fetch("http://localhost:3000/users")
    //         .then(response => response.json())
    //         .then(results => this.setState({ animals: results }))
    // }

    render(){
        return (
            <main className="main">

                {/* HOME */}<Route exact path='/' animal={this.state.animals} render={(routerProps) => <Home {...routerProps} animals={this.state.animals} />} />
                {/* ABOUT */}<Route path='/about' render={(routerProps) => <About {...routerProps} />} />
                {/* FFF */}<Route path='/furryfriendsfinder' render={(routerProps) => <FurryFriendsFinder {...routerProps} animals={this.state.animals}/>} />
                {/* ACCOUNT */}<Route path='/account' render={(routerProps) => <Account {...routerProps} />} />

                <Redirect to='/' />

            </main>
        )
    }
}
