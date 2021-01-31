import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Landing from "./Landing";
import Login from "./Login";
import Search from "./Search";
import Register from "./Register";


export default function SwitchNavRoutes() {
    return(
        <Switch>
            <Route
                exact path="/"
                component={Landing}
            />
            <Route
                path='/search'
                component={Search}
            />
            <Route
                path='/login'
                component={Login}
            />
            <Route
                path='/register'
                component={Register}
            />
        </Switch>
    )
}