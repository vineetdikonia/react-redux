import { ADD_ARTICLE, FOUND_BAD_WORD, DATA_LOADED, FETCH_MASTER, ADD_MASTER } from "../constants/action-types";

const initialState = {
    articles: [],
    remoteArticles: [],
    master_data_new: []
};

export function getMaster(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    if (action.type === FOUND_BAD_WORD) {
        console.log('Badddddddddd');
    }

    if (action.type === DATA_LOADED) {
        return Object.assign({}, state, {
            remoteArticles: state.remoteArticles.concat(action.payload)
        });
    }

    if (action.type === FETCH_MASTER) {
        return Object.assign({}, state = initialState , {
            master_data_new: state.master_data_new.concat(action.payload)
        });
    }

    return state;
}

