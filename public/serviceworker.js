// Mozilla Service Worker Cookbook 'cache only' recipe: https://serviceworke.rs/strategy-cache-only.html
var CACHE = "cache-only";

self.addEventListener("install", (evt) => {
    console.log("The service worker is being installed.");
    evt.waitUntil(precache());
});

self.addEventListener("fetch", (evt) => {
    console.log("The service worker is serving the asset.");
    evt.respondWith(fromCache(evt.request));
});

function precache() {
    return caches.open(CACHE).then((cache) => {
        return cache.addAll([
            "./index.html",
            "./favicon.ico",
            "js/main.js"
        ]);
    });
}

function fromCache(request) {
    return caches.open(CACHE).then((cache) => {
        return cache.match(request).then((matching) => {
            return matching || Promise.reject("no-match");
        });
    });
}
