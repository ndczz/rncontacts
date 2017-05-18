const PushNotification = require('react-native-push-notification')

export function showTestNotification() {
  PushNotification.localNotification({
    id: '0',
    bigText: 'Useless big text',
    subText: 'Useless subtext',
    color: 'red',
    tag: 'notification_tag',
    group: 'notification_group',
    ongoing: false,
    title: 'Useless Notification Title',
    message: 'Useless Notification Message',
    playSound: false,
  })
}