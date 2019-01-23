import { FETCH_CREWS } from "../constants/action-types";

const initialState = {
    crews_data: [],
};

export function getCrews(state = initialState, action) {
    if (action.type === FETCH_CREWS) {
        return Object.assign({}, state = initialState , {
            crews_data: state.crews_data.concat(action.payload)
        });
    }

    return state;
}

