/**
 * https://stackoverflow.com/questions/43180088/react-router-v4-nested-routes-props-children/46523237
 * https://stackoverflow.com/questions/33062830/using-react-router-with-a-layout-page-or-multiple-components-per-page
 * https://stackoverflow.com/questions/42701129/how-to-push-to-history-in-react-router-v4
 */
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "./Layout";
const App = () => (
  <Layout>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topic" component={Topic} />
      </Switch>
    </Router>
  </Layout>
);

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Topic = () => <h3>Requested Param</h3>;
export default App;