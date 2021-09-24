import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from "./pages/landing-page";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={LandingPage} />
        </Switch>
    );
}