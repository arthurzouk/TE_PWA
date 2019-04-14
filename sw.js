self.addEventListener('install', function(event){
    console.log('SW: instalado!', event);

    caches.open('pwa-v1.1').then( function(cache){
        cache.add('/index.html');
    });
})

self.addEventListener('activate', function(event) {
    console.log('SW: ativado!', event);
})

self.addEventListener('fetch', function(event){
    console.log('SW: carregando', event.request.url);
})