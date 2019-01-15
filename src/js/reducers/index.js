import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { getMaster } from './masterReducer.js';

const rootReducer = combineReducers({
    form: formReducer,
    getMaster
});

export default rootReducer;
