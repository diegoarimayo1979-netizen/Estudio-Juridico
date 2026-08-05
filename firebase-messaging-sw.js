importScripts('https://www.gstatic.com/firebasejs/12.17.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.17.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD6NK0CNaP_n8ncmSFp2A-MiQOVzt08RKM",
  authDomain: "pagina-del-estudio-fc0cd.firebaseapp.com",
  projectId: "pagina-del-estudio-fc0cd",
  storageBucket: "pagina-del-estudio-fc0cd.firebasestorage.app",
  messagingSenderId: "909709319888",
  appId: "1:909709319888:web:083761641857378dcfc8d5"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const titulo = payload.notification?.title || 'Portal Clientes';
  const opciones = {
    body: payload.notification?.body || '',
    icon: 'https://diegoarimayo1979-netizen.github.io/Estudio-Juridico/logo.png'
  };
  self.registration.showNotification(titulo, opciones);
});
