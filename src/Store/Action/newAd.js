import { apiCall } from '../../services/api';
import { addError, removeError } from './errors';
import {ADD_NEW_AD} from '../actiontypes';

function SetNewAd (newAd) {
    return {
        type: ADD_NEW_AD,
        newAd
    }
}

export function addNewAd(newAdData){
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall("post", `/api/user/${newAdData.user}/ads/createnewad`, newAdData)
            .then(( addata ) => {
                dispatch(SetNewAd(addata))
                dispatch(removeError());
                resolve();
            })
            .catch((err) => {
                dispatch(addError(err.message));
                    reject();
            })
        })
    }
}


