import * as Utils from '../utility';
import { displayAndroidNotification, displayIosNotification } from '../utility/Utility.js';
import { Platform } from 'react-native';

export default function searchReducer(state = {}, action) {

    switch (action.type) {
        case Utils.ApiTypes.API_SEARCH_METHOD:
            return { ...state, fetching: true, error: null };
            break;
        case Utils.ApiTypes.API_SEARCH_SUCCESS:

            let abbb = {

                "data": {
                    "title": "Hi Expertons, Your Result ",
                    "body": action.payload,
                    "notificationId": 12366,
                    "show_in_foreground": true,
                    "priority": "high",
                    "actions": "com.expertons.LAUNCHER",
                    "color": "red",
                    "autoCancel": true,

                    "channelId": "my_default_channel",

                    "clickAction": "com.expertons.LAUNCHER",
                    "largeIcon": "ic_launcher",
                    "lights": true,
                    "icon": "ic_notif",
                    "notification_data": { "type": "reminder_detail" }
                },
                "priority": "high"
            }


            if (action.payload) {
                if (Platform.OS == "android") {
                    displayAndroidNotification(abbb)
                } else if (Platform.OS == "ios") {
                    displayIosNotification(abbb)
                }

            }

            return { ...state, fetching: false, error: null, resultCal: action.payload };
            break;
        case Utils.ApiTypes.API_SEARCH_FAILURE:

            return { ...state, fetching: false, error: action.error, resultCal: null };
            break;
        case Utils.ApiTypes.API_SEARCH_CLEAR:
            return { ...state, fetching: false, error: action.error, resultCal: undefined };
            break;
        default:
            return state;
    }
}