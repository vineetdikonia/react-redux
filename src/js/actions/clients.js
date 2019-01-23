import { FETCH_CLIENTS } from "../constants/action-types";
import axios from 'axios';

export function createClient(CrewData) {
    return dispatch => {
        axios.post('/api/submit-clients', CrewData).then(response => {

        }).catch(() => {
            console.log("error");
        });
    };
}

export function getClient() {
    return function (dispatch) {
        axios.get('/api/get-clients', {
            responseType: 'json',
        }).then(res => {
            dispatch({ type: FETCH_CLIENTS, payload: res.data });
        });
    };
}