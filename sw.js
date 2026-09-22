// Service worker mínimo: necesario para que el navegador permita instalar
// la página como app. No cachea nada especial, solo deja pasar las
// solicitudes normales.
self.addEventListener('install', () => {
  self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
