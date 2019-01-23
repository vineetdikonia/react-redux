import { ADD_ARTICLE, DATA_LOADED, FETCH_MASTER, FETCH_CREWS } from "../constants/action-types";
import axios from 'axios';

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};

export function getData() {
    return function(dispatch){
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                dispatch({type: DATA_LOADED, payload: json });
            });
    };
}

export function getMaster(type) {
    return function(dispatch){
        axios.get('/api/get-master?type=' + type, {
            responseType: 'json',
        }).then(res => {
            dispatch({ type: FETCH_MASTER, payload: res.data });
        });
    };
}

export function createMaster(Masterdata) {
    return dispatch => {
        axios.post('/api/submit-master', Masterdata).then(response => {
            dispatch(getMaster(Masterdata.type));
        }).catch(() => {
           console.log("error");
        });
    };
}

export function createCrew(CrewData) {
    return dispatch => {
        axios.post('/api/submit-crew', CrewData).then(response => {
            
        }).catch(() => {
           console.log("error");
        });
    };
}

export function getCrews() {
    return function (dispatch) {
        axios.get('/api/get-crews', {
            responseType: 'json',
        }).then(res => {
            dispatch({ type: FETCH_CREWS, payload: res.data });
        });
    };
}