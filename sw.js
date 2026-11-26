const C = 'ta-v44';
const F = [
  './',
  'index.html',
  'app.css',
  'app.js',
  'ayuda.json',
  'updater.js',
  'manifest.json',
  'logo.png',
  'icon-192.png',
  'icon-512.png',
  'apple-touch-icon.png',
  'fotos/recomendaciones/recomendaciones-cucarachas.jpg',
  'fotos/recomendaciones/recomendaciones-hormigas.jpg',
  'fotos/hormigas/portada.webp',
  'fotos/hormigas/faraon.webp',
  'fotos/hormigas/hablar-cliente.webp',
  'fotos/cucaracha-americana/01-ciclo-vida.webp',
  'fotos/cucaracha-americana/02-sellado-antes.webp',
  'fotos/cucaracha-americana/03-sellado-despues.webp',
  'fotos/cucaracha-americana/04-hablar-cliente.webp',
  'fotos/cucaracha-americana/05-racor-sellado.webp',
  'fotos/cucaracha-americana/06-inspeccion-grado.webp',
  'fotos/cucaracha-americana/14-excrementos-americana.webp',
  'fotos/cucaracha-americana/15-adylac-spray.webp',
  'fotos/cucaracha-americana/07-fumigar-tuberia.webp',
  'fotos/cucaracha-americana/08-trampa-nevera.webp',
  'fotos/cucaracha-americana/09-trampa-fregadero.webp',
  'fotos/cucaracha-americana/10-trampa-lavadora.webp',
  'fotos/cucaracha-americana/11-aplicar-gel.webp',
  'fotos/cucaracha-americana/12-terraza-arquetas.webp',
  'fotos/cucaracha-americana/13-contrato-cobro-resena.webp',
  'fotos/cucaracha-alemana/01-identificacion-blatella.png',
  'fotos/cucaracha-alemana/02-presentacion.png',
  'fotos/cucaracha-alemana/03-inspeccion.jpg',
  'fotos/cucaracha-alemana/04-gel-termo-latiguillos.png',
  'fotos/cucaracha-alemana/04b-gel-cajones.png',
  'fotos/cucaracha-alemana/05-trampa-fregadero.png',
  'fotos/cucaracha-alemana/05b-trampa-nevera.png',
  'fotos/cucaracha-alemana/06-material-cobro.png',
  'fotos/cucaracha-alemana/07-pegatina-cuadro.png',
  'fotos/cucaracha-alemana/08-ejemplo-resena-calendario.png',
  'videos/ejemplo-duplicar-resena.mp4',
  'fotos/productos/advion-gel-cucarachas.png',
  'fotos/productos/biogel.png',
  'fotos/productos/biogel-hormigas.png',
  'fotos/productos/defens-gel-cucarachas.png',
  'fotos/productos/victor-gel.png',
  'fotos/productos/aquiles-cucarachas.png',
  'fotos/productos/trap-a-roach-azul.png',
  'fotos/productos/trap-a-roach-negro.png',
  'fotos/productos/trampa-teneplagas.png',
  'fotos/productos/ecorex-action-plus-ambiental.png',
  'fotos/productos/nupilac-dc-green.png',
  'fotos/productos/dobol-granulado.png',
  'fotos/productos/estopa-rastreros.png',
  'fotos/productos/adylac-spray.png',
  'fotos/productos/insect-ibys-avispas.png',
  'fotos/productos/portacebos-rata.png',
  'fotos/productos/racumin-espuma.png',
  'fotos/productos/talon-block.png'
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
