import React, { useEffect, useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, Alert, Platform, Modal, Button,View, Text,Linking } from 'react-native';
import { getAppVersion } from './src/api/setting';
// import * as Notifications from 'expo-notifications';
// import * as Device from 'expo-device';
// import Constants from 'expo-constants';

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: false,
//   }),
// });

const CustomAlert = ({ visible, onClose, message }) => (
  <Modal transparent={true} visible={visible} animationType="fade">
    <View style={styles.overlay}>
      <View style={styles.alertBox}>
        <Text>{message}</Text>
        <Button title="Close" onPress={onClose} />
      </View>
    </View>
  </Modal>
);

export default function App() {
  const APP_VERSION_CODE = 27
  // const [expoPushToken, setExpoPushToken] = useState('');
  // const notificationListener = useRef();
    const navigationRef = useRef();
  // const responseListener = useRef();

  // useEffect(() => {
  //   registerForPushNotificationsAsync().then(token => {
  //     if (token) {
  //       setExpoPushToken(token);
  //       sendTokenToBackend(token); // Send token to your Next.js backend
  //     }
  //   });

  //   // Listen for incoming notifications
  //   notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
  //     console.log('Notification received:', notification);
  //   });

  //   // Listen for when user interacts with a notification
  //   responseListener.current = Notifications.addNotificationResponseReceivedListener(async response => {
  //     // console.log('Notification interaction:', response);
  //      const data = response.notification.request.content.data;
  //        const notificationId = response.notification.request.identifier;
  //     await Notifications.dismissNotificationAsync(notificationId);
  //     if (data?.screen && navigationRef.current) {
  //       navigationRef.current.navigate(data.screen, data.params);
  //     }
  //   });

  //   return () => {
  //     Notifications.removeNotificationSubscription(notificationListener.current);
  //     Notifications.removeNotificationSubscription(responseListener.current);
  //   };
  // }, []);



  useEffect(() => {
    fetchSettings();
  }, []);


const fetchSettings = async () => {
  try {
    const data = await getAppVersion(); // returns object

    if (data?.version_code !== APP_VERSION_CODE) {
      Alert.alert(
        data.title || "Update Available",
        data.message || "Please update your app for better experience.",
        [
          {
            text: "Update",
            onPress: () => {
              // 👇 redirect to Play Store / App Store
              Linking.openURL(
                "https://play.google.com/store/apps/details?id=com.khetiwadiMandiBhav.app"
              );
            },
          },
          { text: "Later", style: "cancel" },
          
        
        ]
      );
    }
  } catch (error) {
    console.error("Error fetching version settings:", error);
  }
};
  
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer ref={navigationRef}>
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
   overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  alertBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
});

// // 🔧 Helper: Register for permissions and get token
// async function registerForPushNotificationsAsync() {
//   if (!Device.isDevice) {
//     Alert.alert('Push notifications only work on physical devices');
//     return;
//   }

//   const { status: existingStatus } = await Notifications.getPermissionsAsync();
//   let finalStatus = existingStatus;

//   if (existingStatus !== 'granted') {
//     const { status } = await Notifications.requestPermissionsAsync();
//     finalStatus = status;
//   }

//   if (finalStatus !== 'granted') {
//     Alert.alert('Failed to get push token for push notifications!');
//     return;
//   }

//   const tokenData = await Notifications.getExpoPushTokenAsync();
//   return tokenData.data;
// }

// // 🔧 Helper: Send token to your Next.js API
// async function sendTokenToBackend(token) {
//   try {
//     await fetch('http://192.168.31.109:3000/api/admin/v1/notifications/save-token', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ token, platform: Platform.OS }),
//     });
//   } catch (error) {
//     console.error('Error sending token to backend:', error);
//   }
// }

