importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js");

// todo Copy/paste firebaseConfig from Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyCvbJL4DptCLzFaiQbwqrB3RD_N-S6WDA0",
    authDomain: "fcmflutter-aabbd.firebaseapp.com",
    projectId: "fcmflutter-aabbd",
    storageBucket: "fcmflutter-aabbd.appspot.com",
    messagingSenderId: "216012171367",
    appId: "1:216012171367:web:afd062d049daf26de2ccc2",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((message) => {
    console.log("onBackgroundMessage", message);
});
