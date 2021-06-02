import firebase from 'react-native-firebase';

import colors from '../utility/Colors';


const KEY_NOTIFICATION_DATA_IOS = 'gcm.notification.notification_data';
const KEY_NOTIFICATION_DATA = 'notification_data';
const KEY_DATA = 'data';


export const displayAndroidNotification = (notificatDataObj) => {
    
    try {
        
      
      const channel = new firebase.notifications.Android.Channel('my_default_channel', 'Test Channel', firebase.notifications.Android.Importance.Max)
        .setDescription('My apps test channel');
      firebase.notifications().android.createChannel(channel);
  
      var notification = new firebase.notifications.Notification();
      notification.android.setColor(colors.darkSkyBlue);
      var notificationId = (new Date).getTime().toString();
      notification.setNotificationId(notificationId);
      notification.android.setChannelId('my_default_channel');
      notification.setTitle(notificatDataObj.data.title);
      notification.setBody(notificatDataObj.data.body);    
     
      
      if (notificatDataObj.data.bigPicture != undefined &&
        notificatDataObj.data.bigPicture != null &&
        notificatDataObj.data.bigPicture != '') {
  
        notification.android.setBigPicture(notificatDataObj.data.bigPicture)
      }
      else {
        notification.android.setBigText(notificatDataObj.data.body);
      }
        notification.setData((notificatDataObj.
          data[KEY_NOTIFICATION_DATA]));
      firebase.notifications()
        .displayNotification(notification);
  
    } catch (error) {
    
      console.warn('error :::', error);
    }
  }
  
  export const displayIosNotification = (notification) => {
    console.log('messageData: ', notification);
    const localNotification = new firebase.notifications.Notification();
    localNotification.setNotificationId((new Date).getTime().toString());
    localNotification.setTitle(notification.title);
    localNotification.setBody(notification.body);
    if (notification.data.bigPicture != undefined &&
      notification.data.bigPicture != null &&
      notification.data.bigPicture != '') {
      notification.ios.setLaunchImage(notification.data.bigPicture)
    }
    localNotification.setData(notification.data);
    if (notification[KEY_DATA][KEY_NOTIFICATION_DATA_IOS]
      != undefined) {
      console.log('messageData [Constants.KEY_NOTIFICATION_DATA]: ',
        notification[KEY_DATA][KEY_NOTIFICATION_DATA_IOS])
      localNotification.setData((notification[KEY_DATA]
      [KEY_NOTIFICATION_DATA_IOS]));
    }
  
    firebase.notifications()
      .displayNotification(localNotification);
  }