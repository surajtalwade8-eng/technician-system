importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCmhzQqH60pyOD-qwCcm52nCXmT0n1Buy0",
  authDomain: "tech-b30b8.firebaseapp.com",
  databaseURL: "https://tech-b30b8-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "tech-b30b8",
  storageBucket: "tech-b30b8.firebasestorage.app",
  messagingSenderId: "815434648437",
  appId: "1:815434648437:web:bd11c672f57fc24e1ba13c"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: 'https://cdn.jsdelivr.net/npm/twemoji/assets/72x72/1f527.png',
    vibrate: [500, 200, 500],
    requireInteraction: true
  });
});