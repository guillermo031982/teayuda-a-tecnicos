const C = 'ta-v1';
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
  'fotos/cucaracha-alemana/img_01.jpg',
  'fotos/cucaracha-alemana/img_02.jpg',
  'fotos/cucaracha-alemana/img_03.jpg',
  'fotos/cucaracha-alemana/img_04.jpg',
  'fotos/cucaracha-alemana/img_05.jpg',
  'fotos/cucaracha-alemana/img_06.jpg',
  'fotos/cucaracha-alemana/img_07.jpg',
  'fotos/cucaracha-alemana/img_08.jpg',
  'fotos/cucaracha-alemana/img_09.jpg',
  'fotos/cucaracha-alemana/img_10.jpg',
  'fotos/cucaracha-alemana/img_11.jpg',
  'fotos/cucaracha-alemana/img_12.jpg',
  'fotos/cucaracha-alemana/img_13.jpg',
  'fotos/cucaracha-alemana/img_14.jpg'
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
