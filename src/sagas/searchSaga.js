import { put, takeLatest, all } from 'redux-saga/effects';
import * as Utils from '../utility';
import callApis from '../services/apiCall';



export function* searchAction(action) {
    try {
       
        // action.search=action.payload.search
        // delete action.payload
        // const data = yield callApis(action)
        yield put({ type: Utils.ApiTypes.API_SEARCH_SUCCESS, payload: action.payload })
    } catch (e) {
        yield put({ type: Utils.ApiTypes.API_SEARCH_FAILURE })
    }
}
