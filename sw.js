const C = 'ta-v2';
const F = [
  './',
  'index.html',
  'app.css',
  'app.js',
  'updater.js',
  'manifest.json',
  'logo.png',
  'icon-192.png',
  'icon-512.png',
  'apple-touch-icon.png',
  'fotos/cucaracha-alemana/01-identificacion-blatella.png',
  'fotos/cucaracha-alemana/02-presentacion.png',
  'fotos/cucaracha-alemana/03-inspeccion.jpg',
  'fotos/cucaracha-alemana/04-gel-termo-latiguillos.png',
  'fotos/cucaracha-alemana/04b-gel-cajones.png',
  'fotos/cucaracha-alemana/05-trampa-fregadero.png',
  'fotos/cucaracha-alemana/05b-trampa-nevera.png',
  'fotos/cucaracha-alemana/06-material-cobro.png',
  'fotos/cucaracha-alemana/07-pegatina-cuadro.png'
];
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(C).then(c => c.addAll(F)));
});
self.addEventListener('activate', e => e.waitUntil(
  caches.keys()
    .then(k => Promise.all(k.filter(x => x.startsWith('ta-') && x !== C).map(x => caches.delete(x))))
    .then(() => self.clients.claim())
));
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  if (new URL(e.request.url).pathname.endsWith('/version.json')) {
    e.respondWith(fetch(e.request, {cache: 'no-store'}));
    return;
  }
  e.respondWith(
    fetch(e.request, {cache: 'no-cache'}).then(r => {
      const cp = r.clone();
      caches.open(C).then(c => c.put(e.request, cp));
      return r;
    }).catch(() => caches.match(e.request, {ignoreSearch: true}))
  );
});
self.addEventListener('message', e => {
  if (e.data === 'skipWaiting') self.skipWaiting();
});
