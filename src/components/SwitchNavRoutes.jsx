import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from '../Utils/PrivateRoute'
import Landing from "./Landing";
import Login from "./Login";
import Search from "./Search";
import Register from "./Register";
import NotFoundPage from "./NotFoundPage";


export default function SwitchNavRoutes() {
    return(
        <Switch>
            <Route
                exact path="/"
                component={Landing}
            />
            <PrivateRoute
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
            <Route
                component={NotFoundPage}
            />
        </Switch>
    )
}