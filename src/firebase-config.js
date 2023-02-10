/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyBiGY749Ter9xXxuheh9olbDGZK9NWnczo",
  authDomain: "friendlychat-d9848.firebaseapp.com",
  projectId: "friendlychat-d9848",
  storageBucket: "friendlychat-d9848.appspot.com",
  messagingSenderId: "426746170976",
  appId: "1:426746170976:web:70bee1aa4bd0e8ea38bd05"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}