import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { getMaster } from './masterReducer.js';
import { getCrews } from './crewsReducer.js';
import { getClients } from './clientReducer.js';

const rootReducer = combineReducers({
    form: formReducer,
    getMaster,
    getCrews,
    getClients
});

export default rootReducer;
