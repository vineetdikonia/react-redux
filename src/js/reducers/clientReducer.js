import { FETCH_CLIENTS } from "../constants/action-types";

const initialState = {
    client_data: [],
};

export function getClients(state = initialState, action) {
    if (action.type === FETCH_CLIENTS) {
        return Object.assign({}, state = initialState, {
            client_data: state.client_data.concat(action.payload)
        });
    }

    return state;
}

