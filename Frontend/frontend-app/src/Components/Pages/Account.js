import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';

import AccountContainer from '../AccountContainer'
import SignIn from '../SignIn'
import UsersPage from '../UsersPage'

export default class Account extends Component {

    render(){
        return (
            <div>
                {this.props.user.username ? 
                <UsersPage signUp={this.props.signUp} user={this.props.user} />
                :
                <> 
                <AccountContainer signUp={this.props.signUp} />
                <SignIn signIn={this.props.signIn} error={this.props.error}/>
                </>
                }
            </div>
        )
    }
}
