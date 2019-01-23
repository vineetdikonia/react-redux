import { FETCH_CLIENTS } from "../constants/action-types";
import axios from 'axios';

export function createBuilding(BuildingData, tenant_info) {
    return dispatch => {
        axios.post('/api/submit-buildings', BuildingData).then(response => {
           if(response.data.data.id){
               var tenanat_data = [];
               tenant_info.map(data => {
                   if(data!== null){
                        data.building_id = response.data.data.id;
                       tenanat_data.push(data);
                   }
               });
               if(tenanat_data.length>0){
                    axios.post('/api/submit-tenant', tenanat_data).then(response => {
                        console.log(response);
                    }).catch(() => {
                        console.log("error");
                    });
               }
           }
        }).catch((error) => {
            console.log(error);
        });
    };
}

export function getBuilding() {
    return function (dispatch) {
        axios.get('/api/get-clients', {
            responseType: 'json',
        }).then(res => {
            dispatch({ type: FETCH_CLIENTS, payload: res.data });
        });
    };
}