import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Addjobs from './container/Addjobs.jsx';
import WorkRequest from './container/WorkRequest.jsx';
import Masters from './container/Masters.jsx';
import Crew from './container/Crew.jsx';
import AddCrew from './container/AddCrew.jsx';
import Clients from './container/Clients.jsx';
import AddClient from './container/AddClient.jsx';
import AddBuilding from './container/AddBuilding.jsx';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={WorkRequest} />
        <Route path="/AddJob" component={Addjobs} />
        <Route path="/about" component={About} />
        <Route path="/masters/:types(category|location)" component={Masters} />
        <Route path="/crew" component={Crew} />
        <Route path="/add_crew" component={AddCrew} />
        <Route path="/clients" component={Clients} />
        <Route path="/add_client" component={AddClient} />
        <Route path="/add_building" component={AddBuilding} />
    </Switch>
);

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Topic = () => <h3>Requested Param</h3>;

export default Routes;