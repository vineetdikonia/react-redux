/**
 * https://stackoverflow.com/questions/43180088/react-router-v4-nested-routes-props-children/46523237
 * https://stackoverflow.com/questions/33062830/using-react-router-with-a-layout-page-or-multiple-components-per-page
 * https://stackoverflow.com/questions/42701129/how-to-push-to-history-in-react-router-v4
 */
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import Layout from "./Layout";
import '../../styles/assets/vendors/base/vendors.bundle.css';
import '../../styles/assets/demo/demo12/base/style.bundle.css';
import '../../styles/assets/vendors/custom/fullcalendar/fullcalendar.bundle.css';
import '../../styles/assets/demo/demo12/base/style.css';
import Routes from "./Routes.js";
import rootReducer from "../reducers";

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <Router>  
    <Layout>
      <Routes />
    </Layout>
    </Router>
  </Provider> 
);

export default App;