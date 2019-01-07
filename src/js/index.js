import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App.jsx";
import Post from "./components/Posts.jsx";
import List from "./components/List.jsx";
import Topic from "./components/container/FormContainer.jsx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

render(
    <Provider store={store}>
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                    <li>
                        <Link to="/lists">Lists</Link>
                    </li>
                </ul>
        
                <hr />
        
                <Route exact path="/" component={App} />
                <Route path="/about" component={Post} />
                <Route path="/topics" component={Topic} />
                <Route path="/lists" component={List} />
            </div>
        </Router>
    </Provider>,
    document.getElementById("root")
);