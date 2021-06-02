import * as Utils from '../utility';


export function searchAction(action) {
    
    return {
        type: Utils.ApiTypes.API_SEARCH_METHOD,
        payload: action
    }
}

