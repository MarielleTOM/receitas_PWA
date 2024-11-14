let cacheName = "mypwa";
let filesToCache = ['/', 'index.html','/CSS/style.css', '/js/main.js', "/carne", '/doces', '/massas','/CSS/carne.css', '/CSS/doces.css', "/CSS/massas.css",
    '/images/bifePeixe.jpeg', '/images/carolina.webp', '/images/espagueteAlFormaggio.png', '/images/frango-assado.jpg', '/images/penneSalmão.jpeg',
     '/images/picanhaComPureDeBatata.jpg', '/images/Sfogliatella.webp', '/images/spaghettiAllaPuttanesca.jpg', '/images/tiramisuItaliano.webp'
];

self.addEventListener("install", (e)=> {
    e.waitUntil(
        caches.open(cacheName).then(function (cache){
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener("fetch", (e)=>{
    e.respondWith(
        caches.match(e.request).then((response)=>{
            return response || fetch(e.request)
        })
    );
});