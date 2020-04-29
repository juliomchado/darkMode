import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/home'


export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route to="/" exact component={Home}/>
                <Redirect from="*" to="/" />
            </Switch>
        </BrowserRouter>
    )
}