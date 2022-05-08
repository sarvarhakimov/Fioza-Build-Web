importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyDOyTMQ4He3Xrt10hpeiFxnKaZunELakAA",
    authDomain: "fioza-build.firebaseapp.com",
    databaseURL: "https://fioza-build-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "fioza-build",
    storageBucket: "fioza-build.appspot.com",
    messagingSenderId: "338154978901",
    appId: "1:338154978901:web:367e788dc0031f007f1edc",
    measurementId: "G-KNBXVT7CEB"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});
